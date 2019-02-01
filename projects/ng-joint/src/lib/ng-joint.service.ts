import { Injectable } from '@angular/core';

import * as NodeCache from 'node-cache';

@Injectable({
  providedIn: 'root'
})
export class NgJointService {

  constructor() { }

  private _shapesCache = new NodeCache();

  setCache(key: string, data: any
  ) {
    this._shapesCache.set(key, data);
  }

  getCache(key: string): any {
    return this._shapesCache.get(key);
  }

}
