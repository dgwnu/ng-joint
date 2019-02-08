import { NgModule } from '@angular/core';

import { DiaPaperService } from './dia-paper.service';
import { DiaPaperComponent } from './dia-paper.component';

@NgModule({
  providers: [ DiaPaperService ],
  declarations: [ DiaPaperComponent ],
  imports: [],
  exports: [ DiaPaperComponent ]
})
export class DiaPaperModule { }
