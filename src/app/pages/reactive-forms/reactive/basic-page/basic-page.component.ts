import {Component, inject} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  imports: [
    JsonPipe,
    ReactiveFormsModule
  ],
  templateUrl: './basic-page.component.html',
  standalone: true,
  styles: ``
})
export class BasicPageComponent {
  // myForm = new FormGroup({
  //   product: new FormControl(''),
  //   price: new FormControl(0),
  //   stock: new FormControl(0),
  // });

  private fb: FormBuilder = inject(FormBuilder);
  myForm = this.fb.group({
    product: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    stock: [0, [Validators.required, Validators.min(0)]],
  })

  isInvalidField(fieldName: string): boolean {
    return !!this.myForm.get(fieldName)?.errors && !!this.myForm.get(fieldName)?.touched;
  }

  getFieldError(fieldName: string): string {
    const formControlErrors = this.myForm.get(fieldName)?.errors;
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

  onSubmit() {
    if (!this.myForm.valid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
