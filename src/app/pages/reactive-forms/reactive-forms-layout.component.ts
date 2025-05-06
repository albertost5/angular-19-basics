import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SideMenuComponent} from '../../shared/side-menu/side-menu.component';

@Component({
  selector: 'app-reactive-forms-layout',
  imports: [
    RouterOutlet,
    SideMenuComponent
  ],
  templateUrl: './reactive-forms-layout.component.html',
  standalone: true,
  styles: ``
})
export class ReactiveFormsLayoutComponent {

}
