import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstLandingRoutingModule } from './first-landing-routing.module';
import { FirstLandingComponent } from './first-landing.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { StepsSectionComponent } from './components/steps-section/steps-section.component';
import { CardsComponent } from './components/cards/cards.component';
import { SummarySectionComponent } from './components/summary-section/summary-section.component';
import { MockupSectionComponent } from './components/mockup-section/mockup-section.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrimeNgModule } from 'src/app/shared/prime-ng/prime-ng.module';
import { VideoComponent } from './components/video/video.component';
import { InfoFotosComponent } from './components/info-fotos/info-fotos.component';
import { BuySectionComponent } from './components/buy-section/buy-section.component';
import { CarouselSectionComponent } from './components/carousel-section/carousel-section.component';
import { SwiperModule } from 'swiper/angular';
import { CourseContentSectionComponent } from './components/course-content-section/course-content-section.component';

@NgModule({
  declarations: [
    FirstLandingComponent,
    MainSectionComponent,
    StepsSectionComponent,
    CardsComponent,
    SummarySectionComponent,
    MockupSectionComponent,
    VideoComponent,
    InfoFotosComponent,
    BuySectionComponent,
    CarouselSectionComponent,
    CourseContentSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrimeNgModule,
    FirstLandingRoutingModule,
    SwiperModule
  ]
})
export class FirstLandingModule { }
