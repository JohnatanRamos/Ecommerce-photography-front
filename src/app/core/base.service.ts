import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMenu } from '../shared/interface/IMenu.interface';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  contentMenu = new Subject<IMenu[]>();
}
