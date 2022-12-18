import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMenu } from '../shared/interface/IMenu.interface';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private api = 'http://localhost:3000/'
  constructor(private http: HttpClient){}

  contentMenu = new Subject<IMenu[]>();

  postMethod(methodName: string, body: any) {
    return this.http.post(this.api + methodName, body, { responseType: 'text' });
  }
}
