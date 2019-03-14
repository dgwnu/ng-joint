import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HowToUseDocModule } from '../how-to-use-doc';
import { OverviewComponent } from './overview.component';
import { OverviewRoutingModule } from './overview-routing.module';

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    HowToUseDocModule,
    OverviewRoutingModule],
  exports: [OverviewRoutingModule]
})
export class OverviewModule { }
