import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/core/base.service';
import { IMenu } from 'src/app/shared/interface/IMenu.interface';

@Component({
  selector: 'app-first-landing',
  templateUrl: './first-landing.component.html',
  styleUrls: ['./first-landing.component.scss']
})
export class FirstLandingComponent implements OnInit {

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
    title: 'Fotos'
  },
  {
    href: '',
    title: 'Contenido del curso'
  },
  {
    href: '',
    title: 'VILEAN'
  },
  {
    href: '',
    title: 'Descuento'
  },
  {
    href: '',
    title: 'Contacto'
  }];

  constructor(private baseService: BaseService) {}

  ngOnInit(): void {
    this.baseService.contentMenu.next(this.menu);
  }
}
