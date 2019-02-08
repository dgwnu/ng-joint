import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-angular-bi-dir-bind',
  templateUrl: './angular-bi-dir-bind.component.html',
  styleUrls: ['./angular-bi-dir-bind.component.scss']
})
export class AngularBiDirBindComponent {

  constructor(private el: ElementRef) { 
    console.log('AngularBiDirBindComponent.el', this.el);
  }

}
