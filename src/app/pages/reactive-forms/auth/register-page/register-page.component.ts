import {Component, inject} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {FormBuilder, ReactiveFormsModule, ValidationErrors, Validators} from '@angular/forms';
import {FormUtils} from '@components/form-utils';

@Component({
  selector: 'app-register-page',
  imports: [
    JsonPipe,
    ReactiveFormsModule,
  ],
  templateUrl: './register-page.component.html',
  standalone: true,
  styles: ``
})
export class RegisterPageComponent {
    private fb = inject(FormBuilder);

    public formUtils = FormUtils;
    public myForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(this.formUtils.namePattern)]],
      email: ['', [Validators.required, Validators.pattern(this.formUtils.emailPattern)]],
      username: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(this.formUtils.notOnlySpacesPattern)]
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    }, {
      validators: this.formUtils.isEqualPasswords('password', 'confirmPassword')
    });


    onSubmit() {
      if (!this.myForm.valid) {
        this.myForm.markAllAsTouched();
        return;
      }
      this.myForm.reset();
    }
}
