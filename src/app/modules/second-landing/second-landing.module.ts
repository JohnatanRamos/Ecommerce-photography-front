import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondLandingRoutingModule } from './second-landing-routing.module';
import { SecondLandingComponent } from './second-landing.component';
import { SecondMainSectionComponent } from './components/second-main-section/second-main-section.component';


@NgModule({
  declarations: [
    SecondLandingComponent,
    SecondMainSectionComponent
  ],
  imports: [
    CommonModule,
    SecondLandingRoutingModule
  ]
})
export class SecondLandingModule { }
