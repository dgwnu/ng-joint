import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';

import { HowToUseDocComponent } from './how-to-use-doc.component';
import { HowToUseDocOverviewComponent } from './how-to-use-doc-overview/how-to-use-doc-overview.component';
import { HowToUseDocApiComponent } from './how-to-use-doc-api/how-to-use-doc-api.component';
import { HowToUseDocExamplesComponent } from './how-to-use-doc-examples/how-to-use-doc-examples.component';
import { HowToUseDocRoutingModule } from './how-to-use-doc-routing.module';

@NgModule({
  declarations: [
    HowToUseDocComponent,
    HowToUseDocOverviewComponent,
    HowToUseDocApiComponent,
    HowToUseDocExamplesComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    HowToUseDocRoutingModule
  ],
  exports: [
    HowToUseDocComponent,
    HowToUseDocRoutingModule
  ]
})
export class HowToUseDocModule { }
