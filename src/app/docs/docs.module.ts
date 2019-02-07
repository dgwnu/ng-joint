import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DocsComponent } from './docs.component';
import { DocsRoutingModule } from './docs-routing.module';

@NgModule({
  declarations: [ DocsComponent ],
  imports: [ DocsRoutingModule, FlexLayoutModule ],
  exports: [ DocsComponent, DocsRoutingModule ]
})
export class DocsModule { }
