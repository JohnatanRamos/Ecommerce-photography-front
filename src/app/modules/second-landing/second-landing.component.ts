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
    href: '',
    title: 'Introducción'
  },
  {
    href: '',
    title: 'Beneficios'
  },
  {
    href: '',
    title: 'VILEAN'
  },
  {
    href: '',
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
