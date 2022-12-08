import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.scss']
})
export class BuyButtonComponent {
  @Input() classButton: 'class_blue' | 'class_yellow' = 'class_yellow';
  @Input() nameButton = 'COMPRAR CURSO';

}