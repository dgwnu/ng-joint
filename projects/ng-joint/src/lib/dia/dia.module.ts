import { NgModule } from '@angular/core';

import { DiaPaperModule } from './paper';
import { DiaGraphModule } from './graph';
import { DiaElementModule } from './element';
import { DiaLinkModule } from './link';

@NgModule({
  imports: [ DiaPaperModule, DiaGraphModule, DiaElementModule, DiaLinkModule ],
  exports: [ DiaPaperModule, DiaGraphModule, DiaElementModule, DiaLinkModule ],
})
export class DiaModule { }
