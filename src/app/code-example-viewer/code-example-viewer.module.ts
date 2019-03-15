import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeExampleViewerComponent } from './code-example-viewer.component';

@NgModule({
  declarations: [
    CodeExampleViewerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CodeExampleViewerComponent
  ]
})
export class CodeExampleViewerModule { }
