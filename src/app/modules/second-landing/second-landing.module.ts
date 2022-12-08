import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondLandingRoutingModule } from './second-landing-routing.module';
import { SecondLandingComponent } from './second-landing.component';
import { SecondMainSectionComponent } from './components/second-main-section/second-main-section.component';
import { SecondSectionStepsComponent } from './components/second-section-steps/second-section-steps.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SecondSectionSummaryComponent } from './components/second-section-summary/second-section-summary.component';


@NgModule({
  declarations: [
    SecondLandingComponent,
    SecondMainSectionComponent,
    SecondSectionStepsComponent,
    SecondSectionSummaryComponent
  ],
  imports: [
    CommonModule,
    SecondLandingRoutingModule,
    SharedModule
  ]
})
export class SecondLandingModule { }
