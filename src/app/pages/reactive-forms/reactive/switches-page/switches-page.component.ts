import {Component, inject} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {FormUtils} from '@utils/form-utils';


@Component({
  selector: 'app-switches-page',
  imports: [
    JsonPipe,
    ReactiveFormsModule
  ],
  templateUrl: './switches-page.component.html',
  standalone: true,
  styles: ``
})
export class SwitchesPageComponent {
    private fb = inject(FormBuilder);
    public formUtils = FormUtils;
    public myForm = this.fb.group({
      gender: ['', Validators.required],
      notifications: [true],
      terms: [false, Validators.requiredTrue],
    });

    onSubmit() {
      if (!this.myForm.valid) {
        this.myForm.markAllAsTouched();
        return;
      };
      this.myForm.reset();
    }
}
