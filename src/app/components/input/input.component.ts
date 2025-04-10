import {Component, output, signal} from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  standalone: true,
  styles: ``
})
export class InputComponent {
  inputValue = signal('');
  nameChange = output<string>();
  onClickNameInput(name: string) {
    if (name.trim() !== '') {
      this.inputValue.set(name);
      this.nameChange.emit(this.inputValue());
    }
  }
}
