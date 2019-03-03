import { NgModule } from '@angular/core';

import { OverviewComponent } from './overview.component';
import { IntroComponent } from './intro';
import { QuickstartComponent } from './quickstart';
import { OverviewRoutingModule } from './overview-routing.module';

@NgModule({
  declarations: [
    OverviewComponent,
    IntroComponent,
    QuickstartComponent],
  imports: [
    OverviewRoutingModule
  ],
  exports: [
    OverviewRoutingModule
  ]
})
export class OverviewModule { }
