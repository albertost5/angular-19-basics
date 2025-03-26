import {Component, model} from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  standalone: true,
  styles: ``
})
export class CounterComponent {
  count = model<number>(0);
  updateCount(amount: number): void {
    this.count.update(current => current + amount);
  }
}
