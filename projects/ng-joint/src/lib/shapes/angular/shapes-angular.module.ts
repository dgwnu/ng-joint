import { NgModule } from '@angular/core';

import { ShapesAngularService } from './shapes-angular.service';
import { ShapesAngularComponent } from './shapes-angular.component';
import { AngularElementModule } from './element';

@NgModule({
  providers: [ ShapesAngularService ],
  declarations: [ ShapesAngularComponent ],
  imports: [ 
    AngularElementModule
  ],
  exports: [
    ShapesAngularComponent,
    AngularElementModule
  ]
})
export class ShapesAngularModule { }
