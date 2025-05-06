import {Component} from '@angular/core';
import {reactiveRoutes } from '../../pages/reactive-forms/reactive/reactive.routes';
import {RouterLink, RouterLinkActive} from '@angular/router';

interface MenuItem {
  title: string;
  route: string;
}

const reactiveItems = reactiveRoutes[0].children ?? [];

@Component({
  selector: 'app-side-menu',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './side-menu.component.html',
  standalone: true,
  styles: ``
})
export class SideMenuComponent {
  reactiveItems: MenuItem[] = reactiveItems
    .filter( item  => item.title !== undefined)
    .map( item => ({
    route: `reactive/${item.path}`,
    title: `${item.title}`
  }));

  authItems: MenuItem[] = [{
    route: './auth',
    title: 'Register'
  }];

  countryItems: MenuItem[] = [{
    route: './country',
    title: 'Country'
  }];
}
