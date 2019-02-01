import { NgModule } from '@angular/core';

import { StandardLinkService } from './standard-link.service';
import { StandardLinkComponent } from './standard-link.component';

@NgModule({
  providers: [ StandardLinkService ],
  declarations: [ StandardLinkComponent ],
  exports: [ StandardLinkComponent ]
})
export class StandardLinkModule { }
