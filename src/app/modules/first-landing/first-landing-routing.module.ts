import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstLandingComponent } from './first-landing.component';

const routes: Routes = [{
  path: '',
  component: FirstLandingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstLandingRoutingModule { }
