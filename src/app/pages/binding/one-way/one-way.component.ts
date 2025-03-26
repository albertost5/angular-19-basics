import {Component, signal} from '@angular/core';
import {TitleComponent} from '@components/title/title.component';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-one-way',
  imports: [
    TitleComponent,
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './one-way.component.html',
  standalone: true,
  styles: ``
})
export default class OneWayComponent {
  name = 'John Doe';
  isDisabled = signal<boolean>(true);
  profilePhotoUrl = 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

  isExpanded = true;
  listClasses = 'full-width outlined';
  sectionClasses = ['expandable', 'elevated'];
  buttonClasses = {
    highlighted: true,
    embiggened: false,
  };
  listStyles = 'display: flex; padding: 8px; font-size: 34px';
  listStylesObject = {
    border: '1px solid black',
    'font-weight': 'bold',
  };
}
