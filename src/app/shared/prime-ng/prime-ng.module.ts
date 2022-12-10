import { NgModule } from '@angular/core';

// Modulos PRIMENG
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MenubarModule} from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';


@NgModule({
  exports: [
    MessageModule,
    MessagesModule,
    MenubarModule,
    DialogModule,
    ButtonModule,
    CardModule
  ]
})
export class PrimeNgModule { }
