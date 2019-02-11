import { NgModule } from '@angular/core';

import { ShapesStandardService } from './shapes-standard.service';
import { ShapesStandardComponent } from './shapes-standard.component';
// To-Do-Schematics
// 1 - update standard shape element and links module imports
// 2 - add standard shape or link module in imports and exports list
// import { StandardRectangleModule } from './rectangle';
// import { StandardLinkModule } from './link';

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
