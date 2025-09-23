import { Routes } from '@angular/router';
import { Home } from '../components/home/home';
import { Sandbox } from '../components/sandbox/sandbox';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'sandbox',
    component: Sandbox,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
