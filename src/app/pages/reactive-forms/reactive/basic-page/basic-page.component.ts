import {Component, inject} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {FormUtils} from '@components/form-utils';


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
  protected readonly FormUtils = FormUtils;

  myForm = this.fb.group({
    product: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    stock: [0, [Validators.required, Validators.min(0)]],
  });

  onSubmit() {
    if (!this.myForm.valid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }

}
