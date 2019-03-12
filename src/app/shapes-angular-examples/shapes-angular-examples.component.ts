import { Component, OnInit } from '@angular/core';

import { AppGenericService } from '../app-generic.service';

@Component({
  selector: 'app-shapes-angular-examples',
  templateUrl: './shapes-angular-examples.component.html',
  styleUrls: ['./shapes-angular-examples.component.scss']
})
export class ShapesAngularExamplesComponent implements OnInit {

  constructor(private appService: AppGenericService) { }

  ngOnInit() {
    this.appService.subTitle = 'Angular Examples';
  }


}
