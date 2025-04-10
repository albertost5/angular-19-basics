import {Component, signal} from '@angular/core';
import {TitleComponent} from '@components/title/title.component';
import {InputComponent} from '@components/input/input.component';

@Component({
  imports: [
    TitleComponent,
    InputComponent
  ],
  templateUrl: './input-output.component.html',
  standalone: true,
  styles: ``
})
export class InputOutputComponent {
  nameSignal = signal<string>('John Doe');
  onNameChange(name: string) {
    this.nameSignal.set(name);
  }
}
