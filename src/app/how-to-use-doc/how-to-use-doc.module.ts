import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';

import { HowToUseDocComponent } from './how-to-use-doc.component';

@NgModule({
  declarations: [
    HowToUseDocComponent],
  imports: [
    CommonModule, // for supporting ngTemplate.. functionality
    MatTabsModule
  ],
  exports: [
    HowToUseDocComponent
  ]
})
export class HowToUseDocModule { }
