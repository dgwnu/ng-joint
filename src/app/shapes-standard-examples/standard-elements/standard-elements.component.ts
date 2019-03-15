import { Component, OnInit } from '@angular/core';

import { AppGenericService } from '../../app-generic.service';

@Component({
  selector: 'app-standard-elements',
  templateUrl: './standard-elements.component.html',
  styleUrls: ['./standard-elements.component.scss']
})
export class StandardElementsComponent implements OnInit {

  constructor(private appService: AppGenericService) { }

  private get _standardElementsSourceUrl(): string {
    return this.appService.shapesStandardExamplesSourceUrl + '/standard-elements';
  }

  get codeSourceUrlExample01(): string {
    return this._standardElementsSourceUrl + '/standard-elements-code-example01/standard-elements-code-example01.component';
  }

  ngOnInit() {
    this.appService.subTitle = 'Standard Elements Examples';
  }

}
