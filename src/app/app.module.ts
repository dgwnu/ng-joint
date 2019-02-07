import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { HelloWorldDemoModule } from './hello-world-demo';
import { AngularElementsDemoModule } from './angular-elements-demo';
import { StructDirDemoModule } from './struct-dir-demo';
import { UmlClassDiagramDemoModule } from './uml-class-diagram-demo';
import {} from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HelloWorldDemoModule,
    AngularElementsDemoModule,
    StructDirDemoModule,
    UmlClassDiagramDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
