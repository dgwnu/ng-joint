import { Component, ContentChildren, QueryList } from '@angular/core';

import { ElementShapeComponent, LinkShapeComponent, GenericShapePluginComponent } from '../shapes';
import { ShapesUmlService } from './shapes-uml.service';
import { UmlAbstractComponent, NgJointUmlAbstract } from './abstract/uml-abstract.component';
import { UmlClassComponent, NgJointUmlClass } from './class/uml-class.component';
import { UmlInterfaceComponent, NgJointUmlInterface } from './interface/uml-interface.component';
import { UmlAggregationComponent, NgJointUmlAggregation } from './aggregation/uml-aggregation.component';
import { UmlCompositionComponent, NgJointUmlComposition } from './composition/uml-composition.component';
import { UmlGeneralizationComponent, NgJointUmlGeneralization } from './generalization/uml-generalization.component';
import { UmlImplementationComponent, NgJointUmlImplementation } from './implementation/uml-implementation.component';

@Component({
  selector: 'ng-joint-shapes-uml',
  template: `
    <ng-content></ng-content>
    `,
})
export class ShapesUmlComponent extends GenericShapePluginComponent {
  @ContentChildren(UmlAbstractComponent) umlAbstract: QueryList<ElementShapeComponent>;
  @ContentChildren(UmlClassComponent) umlClass: QueryList<ElementShapeComponent>;
  @ContentChildren(UmlInterfaceComponent) umlInterface: QueryList<ElementShapeComponent>;
  @ContentChildren(UmlAggregationComponent) umlAggregation: QueryList<LinkShapeComponent>;
  @ContentChildren(UmlCompositionComponent) umlComposition: QueryList<LinkShapeComponent>;
  @ContentChildren(UmlGeneralizationComponent) umlGeneralization: QueryList<LinkShapeComponent>;
  @ContentChildren(UmlImplementationComponent) umlImplementation: QueryList<LinkShapeComponent>;

  constructor(private shapesUmlService: ShapesUmlService) {
    super(shapesUmlService);
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

export { GenericUmlClassShapeComponent, GenericUmlLinkShapeComponent } from './shapes-uml';
