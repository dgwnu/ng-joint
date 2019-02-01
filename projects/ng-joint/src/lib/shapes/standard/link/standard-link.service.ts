import { Injectable } from '@angular/core';

import { DiaGraphElement } from '../../../dia/dia-graph-element';
import { StandardLink } from './standard-link';
import { ShapesStandardService } from '../shapes-standard.service';

@Injectable({
  providedIn: 'root'
})
export class StandardLinkService {

  constructor(private service: ShapesStandardService) { }

  createStandardLink(
    graphElement: DiaGraphElement,
    id: string,
    sourceId: string,
    targetId: string
  ): StandardLink {
    const linkShape = new StandardLink(
      id,
      sourceId,
      targetId
    );
    graphElement.addLinkShape(linkShape);
    return linkShape;
  }
}
