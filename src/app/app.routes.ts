import {Routes} from '@angular/router';
import {LifeCycleComponent} from './pages/life-cycle/life-cycle.component';

export const routes: Routes = [
  {
    path: 'life-cycle',
    component: LifeCycleComponent
  },
  // {
  //   path: 'binding'
  // },
  // {
  //   path: 'routing'
  // },
  // {
  //   path: 'reactive-forms'
  // },
  // {
  //   path: 'ng-class'
  // },
  // {
  //   path: 'pipes'
  // },
  // {
  //   path: 'custom-pipes'
  // },
  {
    path: '**',
    redirectTo: 'life-cycle'
  }
];
