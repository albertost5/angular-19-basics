import {Component, inject} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {FormArray, FormBuilder, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {FormUtils} from '@components/form-utils';

@Component({
  selector: 'app-dynamic-page',
  imports: [
    JsonPipe,
    ReactiveFormsModule
  ],
  templateUrl: './dynamic-page.component.html',
  standalone: true,
  styles: ``
})
export class DynamicPageComponent {
    private fb = inject(FormBuilder);

    public formUtils = FormUtils;
    public myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      favoriteGames: this.fb.array([
        ['Tekken 3', Validators.required],
        ['Metal Gear', Validators.required]
      ], [Validators.minLength(3)]),
    });
    public newFavorite: FormControl = new FormControl('', Validators.required);
    // public newFavorite: FormControl = this.fb.control([], [Validators.required])
    get favoriteGames() {
      return this.myForm.controls.favoriteGames as FormArray;
    }

    onAddToFavorites() {
      if(this.newFavorite.invalid) return;
      const newFav = this.newFavorite.value;
      this.myForm.controls.favoriteGames.push(this.fb.control(newFav, Validators.required));
      // this.myForm.controls.favoriteGames.push(new FormControl(newFav, Validators.required));
      this.newFavorite.reset();
    }

    onDeleteFavorite(index: number) {
      this.favoriteGames.removeAt(index);
    }

    onSubmit() {
      if( !this.myForm.valid ) return;
      this.favoriteGames.clear();
      this.myForm.reset();
      for(const game of ['Tekken 3', 'Metal Gear']) {
        this.favoriteGames.push(
          this.fb.control(game, [Validators.required])
        );
      }
    }
}
