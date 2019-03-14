import { Component, OnInit } from '@angular/core';

import { AppGenericService } from '../app-generic.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(private appService: AppGenericService) { }

  ngOnInit() {
    this.appService.subTitle = 'Overview';
  }

}
