import { Injectable } from '@angular/core';

import { DiaGraph } from './dia-graph';

@Injectable({
  providedIn: 'root'
})
export class DiaGraphService {

  constructor() { }

  createGraph(): DiaGraph {
    return new DiaGraph();
  }

}
