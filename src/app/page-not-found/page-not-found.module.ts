import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from './page-not-found.component';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [PageNotFoundRoutingModule],
  exports: [PageNotFoundRoutingModule]
})
export class PageNotFoundModule { }
