import {Routes} from '@angular/router';
import {LifeCycleComponent} from './pages/life-cycle/life-cycle.component';
import {ControlFlowComponent} from './pages/control-flow/control-flow.component';
import {InputOutputComponent} from './pages/input-output/input-output.component';
import {PipesComponent} from './pages/pipes/pipes.component';
import {CustomPipesComponent} from './pages/custom-pipes/custom-pipes.component';

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
    path: 'control-flow',
    component: ControlFlowComponent,
  },
  {
    path: 'input-output',
    component: InputOutputComponent,
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },
  {
    path: 'custom-pipes',
    component: CustomPipesComponent,
  },
  {
    path: 'reactive-forms',
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./pages/reactive-forms/auth/auth.routes').then(m => m.authRoutes)
      },
      {
        path: 'reactive',
        loadChildren: () => import('./pages/reactive-forms/reactive/reactive.routes').then(m => m.reactiveRoutes)
      },
      {
        path: 'country',
        loadChildren: () => import('./pages/reactive-forms/country/country.routes').then(m => m.countryRoutes)
      },
      {
        path: '',
        redirectTo: 'reactive',
        pathMatch: 'full'
      },
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
