import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard-elements-code-example01',
  templateUrl: './standard-elements-code-example01.component.html',
  styleUrls: ['./standard-elements-code-example01.component.scss']
})
export class StandardElementsCodeExample01Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onElementPointerClick(cid: string) {
    console.log('onElementPointerClick.cid', cid);
  }

  onCellAdd(cid: string) {
    console.log('onCellAdd.cid', cid);
  }

}
