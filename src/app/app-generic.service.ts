import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppGenericService {
  readonly mainTitle = 'ng-joint';
  subTitle = '<<not initialzied>>';

  private readonly _appSourceUrl = 'https://raw.githubusercontent.com/dgwnu/ng-joint/master/src/app';
  readonly shapesStandardExamplesSourceUrl = this._appSourceUrl + '/shapes-standard-examples';

  constructor() { }
}
