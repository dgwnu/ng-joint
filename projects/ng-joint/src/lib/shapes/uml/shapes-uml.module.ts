import { NgModule } from '@angular/core';

import { ShapesUmlService } from './shapes-uml.service';
import { ShapesUmlComponent } from './shapes-uml.component';
import { UmlAbstractModule } from './abstract/uml-abstract.module';
import { UmlClassModule } from './class/uml-class.module';
import { UmlInterfaceModule } from './interface/uml-interface.module';
import { UmlGeneralizationModule } from './generalization/uml-generalization.module';
import { UmlCompositionModule } from './composition/uml-composition.module';
import { UmlImplementationModule } from './implementation/uml-implementation.module';
import { UmlAggregationModule } from './aggregation/uml-aggregation.module';

@NgModule({
  providers: [ ShapesUmlService ],
  declarations: [ ShapesUmlComponent ],
  imports: [
    UmlAbstractModule,
    UmlClassModule,
    UmlInterfaceModule,
    UmlGeneralizationModule,
    UmlCompositionModule,
    UmlImplementationModule,
    UmlAggregationModule
  ],
  exports: [
    ShapesUmlComponent,
    UmlAbstractModule,
    UmlClassModule,
    UmlInterfaceModule,
    UmlGeneralizationModule,
    UmlCompositionModule,
    UmlImplementationModule,
    UmlAggregationModule
  ]
})
export class ShapesUmlModule { }
