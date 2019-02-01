import { NgModule } from '@angular/core';

import { ShapesComponent } from './shapes.component';
import { ShapesService } from './shapes.service';

@NgModule({
  providers: [ ShapesService ],
  declarations: [ ShapesComponent ],
  exports: [ ShapesComponent ]
})
export class ShapesModule { }
