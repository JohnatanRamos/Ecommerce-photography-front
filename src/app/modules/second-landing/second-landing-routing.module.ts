import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondLandingComponent } from './second-landing.component';

const routes: Routes = [
  {
    path: '',
    component: SecondLandingComponent,
  },
  {
    path: '**',
    component: SecondLandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondLandingRoutingModule {}
