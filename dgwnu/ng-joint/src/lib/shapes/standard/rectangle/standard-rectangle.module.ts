import { NgModule } from '@angular/core';

import { StandardRectangleService } from './standard-rectangle.service';
import { StandardRectangleComponent } from './standard-rectangle.component';

@NgModule({
  providers: [ StandardRectangleService ],
  declarations: [ StandardRectangleComponent ],
  exports: [ StandardRectangleComponent ]
})
export class StandardRectangleModule { }
