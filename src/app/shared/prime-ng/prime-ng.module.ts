import { NgModule } from '@angular/core';

// Modulos PRIMENG
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MenubarModule } from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  exports: [
    MessageModule,
    MessagesModule,
    MenubarModule,
    DialogModule,
    ButtonModule,
    CardModule,
    SidebarModule,
    ToastModule,
    ProgressSpinnerModule
  ],
})
export class PrimeNgModule {}
