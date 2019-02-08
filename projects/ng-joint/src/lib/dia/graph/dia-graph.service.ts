import { Injectable } from '@angular/core';

import { DiaGraph } from './dia-graph';

@Injectable({
  providedIn: 'root'
})
export class DiaGraphService {

  constructor() { }

  private _graphArray: DiaGraph[] = [];

  createGraph(): DiaGraph {
    return new DiaGraph();
  }

}
