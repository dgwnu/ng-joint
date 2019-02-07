import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { HelloWorldDemoModule } from './hello-world-demo';
import { AngularElementsDemoModule } from './angular-elements-demo';
import { StructDirDemoModule } from './struct-dir-demo';
import { UmlClassDiagramDemoModule } from './uml-class-diagram-demo';
import { DocsModule } from './docs';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppMaterialModule,
    HelloWorldDemoModule,
    AngularElementsDemoModule,
    StructDirDemoModule,
    UmlClassDiagramDemoModule,
    DocsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
