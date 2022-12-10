import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './shared/prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VideoComponent } from './components/video/video.component';
import { InfoFotosComponent } from './components/info-fotos/info-fotos.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    InfoFotosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    PrimeNgModule
  ],
  exports: [SharedModule, PrimeNgModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
