import {FormGroup} from '@angular/forms';

export class FormUtils {
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
        return `The min value is ${formControlErrors!['min']['min']}`
    }
    return '';
  }
}
