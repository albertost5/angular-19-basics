import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CounterComponent} from '@components/counter/counter.component';

@Component({
  selector: 'app-two-way',
  imports: [FormsModule, CounterComponent],
  templateUrl: './two-way.component.html',
  standalone: true,
  styles: ``
})
export default class TwoWayComponent {
  firstName = 'Ada';
  initialCount = 18;
}
