import { Component, OnInit } from '@angular/core';

import { AppGenericService } from '../../app-generic.service';

@Component({
  selector: 'app-standard-links',
  templateUrl: './standard-links.component.html',
  styleUrls: ['./standard-links.component.scss']
})
export class StandardLinksComponent implements OnInit {

  constructor(private appService: AppGenericService) { }

  private get _standardElementsSourceUrl(): string {
    return this.appService.shapesStandardExamplesSourceUrl + '/standard-links';
  }

  get codeSourceUrlExample01(): string {
    return this._standardElementsSourceUrl + '/standard-links-code-example01/standard-links-code-example01.component';
  }

  ngOnInit() {
    this.appService.subTitle = 'Standard Links Examples';
  }

}
