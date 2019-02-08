import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-angular-template-only',
  templateUrl: './angular-template-only.component.html',
  styleUrls: ['./angular-template-only.component.scss']
})
export class AngularTemplateOnlyComponent {

  constructor(private el: ElementRef) { 
    console.log('AngularTemplateOnlyComponent.el', this.el);
  }

}
