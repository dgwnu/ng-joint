import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppGenericService } from './app-generic.service';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';

import { ShapesStandardExamplesModule } from './shapes-standard-examples';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  providers: [AppGenericService],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FlexLayoutModule,
    AppMaterialModule,
    ShapesStandardExamplesModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
