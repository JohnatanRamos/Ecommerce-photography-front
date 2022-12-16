import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { BuyButtonComponent } from './components/buy-button/buy-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    BuyButtonComponent,
    FooterComponent,
    MenuComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    BuyButtonComponent,
    FooterComponent,
    MenuComponent
  ]
})
export class SharedModule { }
