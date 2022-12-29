import { ViewportScroller } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { BaseService } from 'src/app/core/base.service';
import { IMenu } from '../../interface/IMenu.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() visibleSidebar = false;
  @Output() emitCloseSidebar = new EventEmitter();
  menu!: IMenu[];

  constructor(
    private primengConfig: PrimeNGConfig,
    private baseService: BaseService,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.baseService.contentMenu.subscribe((res: IMenu[]) => {
      this.menu = res;
    });
  }

  handleCloseSidebar() {
    this.emitCloseSidebar.emit(false);
  }

  changeRouter(id: string) {
    this.viewportScroller.scrollToAnchor(id);
  }
}
