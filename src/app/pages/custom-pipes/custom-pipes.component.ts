import {Component, signal} from '@angular/core';
import {ToggleCasePipe} from '../../pipes/toggle-case.pipe';
import {heroes} from '../../data/heroes.data';

@Component({
  imports: [
    ToggleCasePipe
  ],
  templateUrl: './custom-pipes.component.html',
  standalone: true,
  styles: ``
})
export class CustomPipesComponent {
  fullName = signal<string>('John Doe')
  upperCase = signal(true);
  heroes = signal(heroes);

  toggleCase() {
    this.upperCase.update(current => !current);
  }
}
