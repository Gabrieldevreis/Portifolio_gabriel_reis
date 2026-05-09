import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/classic-portfolio/classic-portfolio.component').then((m) => m.ClassicPortfolioComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
