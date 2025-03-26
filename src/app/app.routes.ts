import {Routes} from '@angular/router';
import {LifeCycleComponent} from './pages/life-cycle/life-cycle.component';

export const routes: Routes = [
  {
    path: 'life-cycle',
    component: LifeCycleComponent
  },
  {
    path: 'binding',
    children: [
      { path: 'one-way', loadComponent: () => import('./pages/binding/one-way/one-way.component') },
      { path: 'two-way', loadComponent: () => import('./pages/binding/two-way/two-way.component') },
      { path: '**', redirectTo: 'one-way' }
    ]
  },
  {
    path: '',
    redirectTo: 'life-cycle',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'life-cycle',
  }
];
