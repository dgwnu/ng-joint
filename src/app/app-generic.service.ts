import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppGenericService {
  readonly mainTitle = 'ng-joint';
  subTitle = '<<not initialzied>>';

  constructor() { }
}
