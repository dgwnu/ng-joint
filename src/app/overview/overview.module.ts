import { NgModule } from '@angular/core';

import { OverviewComponent } from './overview.component';
import { OverviewRoutingModule } from './overview-routing.module';

@NgModule({
  declarations: [OverviewComponent],
  imports: [OverviewRoutingModule],
  exports: [OverviewRoutingModule]
})
export class OverviewModule { }
