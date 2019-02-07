import { NgModule } from '@angular/core';

import { DocsComponent } from './docs.component';
import { DocsRoutingModule } from './docs-routing.module';

@NgModule({
  declarations: [ DocsComponent ],
  imports: [ DocsRoutingModule ],
  exports: [ DocsComponent, DocsRoutingModule ]
})
export class DocsModule { }
