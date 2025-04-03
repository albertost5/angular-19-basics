import {Component, signal} from '@angular/core';

interface Character {
  id: number;
  name: string;
}

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.component.html',
  standalone: true,
  styles: ``
})
export class ControlFlowComponent {
  isVisible = signal<boolean>(false);
  characters = signal<Character[]>([
    { id: 1, name: 'Goku' },
    { id: 2, name: 'Gohan' },
    { id: 3, name: 'Piccolo' },
  ]);
  userPermissions = signal('SUPER_ADMIN');

  onShowElement() {
    this.isVisible.update(value => !value);
    this.userPermissions.update(current => {
      if(this.isVisible()) {
        return 'ADMIN'
      } else {
        return 'USER'
      }
    })
  }
}
