import { NgModule } from '@angular/core';

import { ShapesStandardService } from './shapes-standard.service';
import { ShapesStandardComponent } from './shapes-standard.component';
import { StandardRectangleModule } from './rectangle';
import { StandardLinkModule } from './link';

@NgModule({
  providers: [ ShapesStandardService ],
  declarations: [ ShapesStandardComponent ],
  imports: [
    StandardRectangleModule,
    StandardLinkModule
  ],
  exports: [
    ShapesStandardComponent,
    StandardRectangleModule,
    StandardLinkModule
  ]
})
export class ShapesStandardModule { }
