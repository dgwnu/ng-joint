import { NgModule } from '@angular/core';

import { HowToUseDocModule } from '../how-to-use-doc';
import { OverviewComponent } from './overview.component';
import { OverviewRoutingModule } from './overview-routing.module';

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    HowToUseDocModule,
    OverviewRoutingModule],
  exports: [OverviewRoutingModule]
})
export class OverviewModule { }
