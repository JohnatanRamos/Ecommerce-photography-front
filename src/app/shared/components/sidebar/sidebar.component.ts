import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() visibleSidebar = false;
  @Input() menu!: {href: string; title: string}[];
  @Output() emitCloseSidebar = new EventEmitter();
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  handleCloseSidebar() {
    this.emitCloseSidebar.emit(false);
  }
}
