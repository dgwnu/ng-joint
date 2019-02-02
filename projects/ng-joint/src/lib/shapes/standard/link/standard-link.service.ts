import { Injectable, SimpleChanges } from '@angular/core';

import { DiaGraphElement } from '../../../dia/dia-graph-element';
import { LinkShapeService } from '../../shapes';
import { StandardLink } from './standard-link';
import { ShapesStandardService } from '../shapes-standard.service';
import { StandardLinkComponent } from './standard-link.component';

@Injectable({
  providedIn: 'root'
})
export class StandardLinkService implements LinkShapeService {

  constructor(private service: ShapesStandardService) { }

  createLinkShape(
    graphElement: DiaGraphElement,
    component: StandardLinkComponent
    ): StandardLink {
    const linkShape = new StandardLink(
      component.id,
      component.sourceId,
      component.targetId,
      {
        line: component.line
      }
    );

    graphElement.addLinkShape(linkShape);
    return linkShape;
  }

  onEvents(component: StandardLinkComponent) {
    this.service.onLinkEvents(component);
  }

  setChanges(changes: SimpleChanges, component: StandardLinkComponent) {
    this.service.setLinkChanges(changes, component);
  }
}
