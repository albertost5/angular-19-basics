import {AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors} from '@angular/forms';

export class FormUtils {
  static namePattern = '([a-zA-Z]+) ([a-zA-Z]+)';
  static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';

  static isInvalidField(form: FormGroup, fieldName: string): boolean {
    return !!form.get(fieldName)?.errors && !!form.get(fieldName)?.touched;
  }

  static getFieldError(form: FormGroup, fieldName: string): string {
    const formControlErrors = form.get(fieldName)?.errors;
    switch (Object.keys(formControlErrors!)[0]) {
      case 'required':
        return `The field ${fieldName} is required`;
      case 'minlength':
        return `The min length is ${formControlErrors!['minlength']['requiredLength']}`;
      case 'min':
        return `The min value is ${formControlErrors!['min']['min']}`;
      case 'email':
        return 'The field email is required';
      case 'pattern':
        return fieldName === 'email' ? 'Introduce a valid email format' : 'Introduce a valid username format';
    }
    return '';
  }

  static isInvalidFieldInArray(formArray: FormArray, index: number): boolean {
    return !!formArray.controls[index].errors && formArray.controls[index].touched;
  }

  static getFieldErrorInArray(formArray: FormArray, index: number): string {
    switch (Object.keys(formArray.controls[index].errors!)[0]) {
      case 'required':
        return `The field is required`;
    }
    return '';
  }

  static isEqualPasswords(field1: string, field2: string) {
    return (formGroup: AbstractControl): ValidationErrors|null => {
      const password = formGroup.get(field1)?.value;
      const confirmPassword = formGroup.get(field2)?.value;

      return password === confirmPassword ? null : {isEqualPasswords: false}
    }
  }
}
