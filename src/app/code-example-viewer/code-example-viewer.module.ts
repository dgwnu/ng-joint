// https://www.npmjs.com/package/ngx-md
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatCardModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgxMdModule } from 'ngx-md';

import { CodeExampleViewerComponent } from './code-example-viewer.component';

@NgModule({
  declarations: [
    CodeExampleViewerComponent
  ],
  imports: [
    CommonModule, HttpClientModule,
    MatToolbarModule, MatTabsModule, MatButtonModule, MatCardModule,
    FlexLayoutModule,
    NgxMdModule
  ],
  exports: [
    CodeExampleViewerComponent
  ]
})
export class CodeExampleViewerModule { }
