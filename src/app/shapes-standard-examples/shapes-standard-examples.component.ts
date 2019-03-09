import { Component, OnInit } from '@angular/core';

import { AppGenericService } from '../app-generic.service';

@Component({
  selector: 'app-shapes-standard-examples',
  templateUrl: './shapes-standard-examples.component.html',
  styleUrls: ['./shapes-standard-examples.component.scss']
})
export class ShapesStandardExamplesComponent implements OnInit {

  constructor(private appService: AppGenericService) { }

  ngOnInit() {
    this.appService.subTittle = 'Standard Examples';
  }

}
