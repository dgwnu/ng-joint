import {
  Component,
  ContentChild,
  AfterContentInit
} from '@angular/core';

import { DiaGraphElement } from '../dia/dia-graph-element';
import { ShapePlugin } from './shapes';
import { ShapesService } from './shapes.service';
import { ShapesStandardComponent } from './standard/shapes-standard.component';
import { ShapesAngularComponent } from './angular/shapes-angular.component';
import { ShapesUmlComponent } from './uml/shapes-uml.component';

@Component({
  selector: 'dgwnu-shapes',
  template: `
    <ng-content></ng-content>
    `,
})
export class ShapesComponent implements AfterContentInit {
  @ContentChild(ShapesStandardComponent) shapesStandard: ShapePlugin;
  @ContentChild(ShapesAngularComponent) shapesAngular: ShapePlugin;
  @ContentChild(ShapesUmlComponent) shapesUml: ShapePlugin;

  constructor(
    private shapesService: ShapesService,
    ) { }

  private _graphElement: DiaGraphElement;

  ngAfterContentInit() {
    console.log('+----------------------------------------+');
    console.log('| ShapesComponent.ngAfterContentInit |');
    console.log('+----------------------------------------+');
  }

  set graphElement(value: DiaGraphElement) {
    this._graphElement = value;
    this.shapesService.activateShapePlugins(
      [
        this.shapesStandard,
        this.shapesAngular,
        this.shapesUml
      ],
      this._graphElement);
  }

}

export { GenericElementShapeComponent, GenericLinkShapeComponent } from './shapes';
