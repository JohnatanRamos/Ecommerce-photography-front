import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.scss']
})
export class BuyButtonComponent {
  @Input() classButton: 'class_blue' | 'class_yellow' | 'class_blue_color_yellow' = 'class_yellow';
  @Input() nameButton = 'COMPRAR CURSO';
  @Output() emitClick = new EventEmitter();

  handelClick() {
    this.emitClick.emit();
  }
}
