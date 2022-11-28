import { NgModule } from '@angular/core';

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MenubarModule} from 'primeng/menubar';



@NgModule({
  exports: [
    MessageModule,
    MessagesModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
