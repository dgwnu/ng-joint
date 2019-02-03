import { Component, AfterContentInit, ContentChildren, QueryList } from '@angular/core';

import { DiaGraphElement } from '../../dia/dia-graph-element';
import { ShapePlugin, ElementShapeComponent, LinkShapeComponent } from '../shapes';
import { ShapesUmlService } from './shapes-uml.service';
import { UmlAbstractComponent, NgJointUmlAbstract } from './abstract/uml-abstract.component';
import { UmlClassComponent, NgJointUmlClass } from './class/uml-class.component';
import { UmlInterfaceComponent, NgJointUmlInterface } from './interface/uml-interface.component';
import { UmlAggregationComponent, NgJointUmlAggregation } from './aggregation/uml-aggregation.component';
import { UmlCompositionComponent, NgJointUmlComposition } from './composition/uml-composition.component';
import { UmlGeneralizationComponent, NgJointUmlGeneralization } from './generalization/uml-generalization.component';
import { UmlImplementationComponent, NgJointUmlImplementation } from './implementation/uml-implementation.component';

@Component({
  selector: 'dgwnu-shapes-uml',
  template: `
    <ng-content></ng-content>
    `,
})
export class ShapesUmlComponent implements AfterContentInit, ShapePlugin {
  @ContentChildren(UmlAbstractComponent) umlAbstract: QueryList<ElementShapeComponent>;
  @ContentChildren(UmlClassComponent) umlClass: QueryList<ElementShapeComponent>;
  @ContentChildren(UmlInterfaceComponent) umlInterface: QueryList<ElementShapeComponent>;
  @ContentChildren(UmlAggregationComponent) umlAggregation: QueryList<LinkShapeComponent>;
  @ContentChildren(UmlCompositionComponent) umlComposition: QueryList<LinkShapeComponent>;
  @ContentChildren(UmlGeneralizationComponent) umlGeneralization: QueryList<LinkShapeComponent>;
  @ContentChildren(UmlImplementationComponent) umlImplementation: QueryList<LinkShapeComponent>;

  constructor(private service: ShapesUmlService) { }

  private _graphElement: DiaGraphElement;

  ngAfterContentInit() {
    console.log('+----------------------------------------+');
    console.log('| ShapesUmlComponent.ngAfterContentInit |');
    console.log('+----------------------------------------+');
  }

  set graphElement(value: DiaGraphElement) {
    console.log('+----------------------------------------+');
    console.log('| ShapesUmlComponent.graphElement |');
    console.log('+----------------------------------------+');

    this._graphElement = value;
    console.log('this._graphElement = value;', value);

    this.service.createShapes(
      [this.umlAbstract, this.umlClass, this.umlInterface],
      [this.umlAggregation, this.umlComposition, this.umlGeneralization, this.umlImplementation],
      this._graphElement
      );

  }

}

export {
  UmlAbstractComponent, NgJointUmlAbstract,
  UmlClassComponent, NgJointUmlClass,
  UmlInterfaceComponent, NgJointUmlInterface,
  UmlAggregationComponent, NgJointUmlAggregation,
  UmlCompositionComponent, NgJointUmlComposition,
  UmlGeneralizationComponent, NgJointUmlGeneralization,
  UmlImplementationComponent, NgJointUmlImplementation
};

export { GenericUmlClassShapeComponent } from './shapes-uml';
