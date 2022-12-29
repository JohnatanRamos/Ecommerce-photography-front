import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/core/base.service';
import { IMenu } from 'src/app/shared/interface/IMenu.interface';

@Component({
  selector: 'app-second-landing',
  templateUrl: './second-landing.component.html',
  styleUrls: ['./second-landing.component.scss']
})
export class SecondLandingComponent implements OnInit {

  menu: IMenu[] = [{
    href: 'introduccion',
    title: 'Introducción'
  },
  {
    href: 'summary',
    title: 'VILEAN'
  },
  {
    href: 'form',
    title: 'Formulario'
  },
  {
    href: 'contact',
    title: 'Contacto'
  }];

  constructor(private baseService: BaseService) {}

  ngOnInit(): void {
    this.baseService.contentMenu.next(this.menu);
  }
}
