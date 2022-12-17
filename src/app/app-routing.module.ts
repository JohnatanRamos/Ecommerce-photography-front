import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/first-landing/first-landing.module').then(
        (m) => m.FirstLandingModule
      ),
  },
  {
    path: 'free-landing',
    loadChildren: () =>
      import('./modules/second-landing/second-landing.module').then(
        (m) => m.SecondLandingModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/first-landing/first-landing.module').then(
        (m) => m.FirstLandingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
