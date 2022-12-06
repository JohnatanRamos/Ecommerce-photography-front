import { NgModule } from '@angular/core';

// Modulos PRIMENG
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MenubarModule} from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';



@NgModule({
  exports: [
    MessageModule,
    MessagesModule,
    MenubarModule,
    DialogModule,
    ButtonModule
  ]
})
export class PrimeNgModule { }
