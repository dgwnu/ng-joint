import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppGenericService } from './app-generic.service';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';

import { NgxMdModule } from 'ngx-md';

import { OverviewModule } from './overview';
import { ShapesStandardExamplesModule } from './shapes-standard-examples';
import { ShapesUmlExamplesModule } from './shapes-uml-examples';
import { ShapesAngularExamplesModule } from './shapes-angular-examples';
import { PageNotFoundModule } from './page-not-found';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  providers: [AppGenericService],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FlexLayoutModule,
    NgxMdModule.forRoot(),
    AppMaterialModule,
    OverviewModule,
    ShapesStandardExamplesModule,
    ShapesUmlExamplesModule,
    ShapesAngularExamplesModule,
    PageNotFoundModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
