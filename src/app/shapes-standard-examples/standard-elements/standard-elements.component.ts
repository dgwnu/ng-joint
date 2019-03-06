import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard-elements',
  templateUrl: './standard-elements.component.html',
  styleUrls: ['./standard-elements.component.scss']
})
export class StandardElementsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onElementPointerClick(id: string) {
    console.log('onElementPointerClick.id', id);
  }

}
