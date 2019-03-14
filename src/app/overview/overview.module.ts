import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatIconModule } from '@angular/material';

import { HowToUseDocModule } from '../how-to-use-doc';
import { OverviewComponent } from './overview.component';
import { OverviewRoutingModule } from './overview-routing.module';

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    MatListModule, MatIconModule,
    HowToUseDocModule,
    OverviewRoutingModule],
  exports: [OverviewRoutingModule]
})
export class OverviewModule { }
