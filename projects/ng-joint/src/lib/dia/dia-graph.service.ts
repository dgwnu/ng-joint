import { Injectable } from '@angular/core';

import { DiaGraphElement } from './dia-graph-element';

@Injectable({
  providedIn: 'root'
})
export class DiaGraphService {

  constructor() { }

  private _graphArray: DiaGraphElement[] = [];

  createGraphElement(): DiaGraphElement {
    return new DiaGraphElement();
  }

}
