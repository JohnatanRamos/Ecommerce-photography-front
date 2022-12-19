import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondLandingRoutingModule } from './second-landing-routing.module';
import { SecondLandingComponent } from './second-landing.component';
import { SecondMainSectionComponent } from './components/second-main-section/second-main-section.component';
import { SecondSectionStepsComponent } from './components/second-section-steps/second-section-steps.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SecondSectionSummaryComponent } from './components/second-section-summary/second-section-summary.component';
import { SecondVideoComponent } from './components/second-video/second-video.component';
import { SecondInfoFotosComponent } from './components/second-info-fotos/second-info-fotos.component';
import { SecondBuySectionComponent } from './components/second-buy-section/second-buy-section.component';
import { SecondInfoBuySectionComponent } from './components/second-info-buy-section/second-info-buy-section.component';
import { FormInfoComponent } from './components/form-info/form-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from 'src/app/shared/prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    SecondLandingComponent,
    SecondMainSectionComponent,
    SecondSectionStepsComponent,
    SecondSectionSummaryComponent,
    SecondVideoComponent,
    SecondInfoFotosComponent,
    SecondBuySectionComponent,
    SecondInfoBuySectionComponent,
    FormInfoComponent
  ],
  imports: [
    CommonModule,
    SecondLandingRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule
  ]
})
export class SecondLandingModule { }
