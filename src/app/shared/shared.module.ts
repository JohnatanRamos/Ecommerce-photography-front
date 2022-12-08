import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { BuyButtonComponent } from './components/buy-button/buy-button.component';



@NgModule({
  declarations: [
    BuyButtonComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    BuyButtonComponent
  ]
})
export class SharedModule { }
