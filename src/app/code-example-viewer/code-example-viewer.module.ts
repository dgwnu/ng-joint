import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';

import { CodeExampleViewerComponent } from './code-example-viewer.component';

@NgModule({
  declarations: [
    CodeExampleViewerComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports: [
    CodeExampleViewerComponent
  ]
})
export class CodeExampleViewerModule { }
