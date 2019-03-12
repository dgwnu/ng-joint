import { Component, ElementRef, OnInit } from '@angular/core';

import { AppGenericService } from '../../app-generic.service';

@Component({
  selector: 'app-angular-template-only',
  templateUrl: './angular-template-only.component.html',
  styleUrls: ['./angular-template-only.component.scss']
})
export class AngularTemplateOnlyComponent implements OnInit {

  constructor(private appService: AppGenericService, private el: ElementRef) { 
    console.log('AngularTemplateOnlyComponent.el', this.el);
  }

  ngOnInit() {
    this.appService.subTitle = 'Angular Template Only Example';
  }

}
