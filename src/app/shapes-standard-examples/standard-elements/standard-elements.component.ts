import { Component, OnInit } from '@angular/core';

import { AppGenericService } from '../../app-generic.service';


@Component({
  selector: 'app-standard-elements',
  templateUrl: './standard-elements.component.html',
  styleUrls: ['./standard-elements.component.scss']
})
export class StandardElementsComponent implements OnInit {

  constructor(private appService: AppGenericService) { }

  ngOnInit() {
    this.appService.subTitle = 'Standard Elements Examples';
  }

  onElementPointerClick(id: string) {
    console.log('onElementPointerClick.id', id);
  }

  onGraphAdd(id: string) {
    console.log('onGraphAdd.id', id);
  }

}
