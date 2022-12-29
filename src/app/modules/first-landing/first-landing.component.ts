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
    href: 'video',
    title: 'Introducción'
  },
  {
    href: 'coursel',
    title: 'Fotos'
  },
  {
    href: 'content-course',
    title: 'Contenido del curso'
  },
  {
    href: 'mockup',
    title: 'VILEAN'
  },
  {
    href: 'travel-kit',
    title: 'Descuento'
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
