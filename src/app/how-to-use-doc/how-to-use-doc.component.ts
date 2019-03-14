import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to-use-doc',
  templateUrl: './how-to-use-doc.component.html',
  styleUrls: ['./how-to-use-doc.component.scss']
})
export class HowToUseDocComponent implements OnInit {

  constructor() { }

  navLinks = [
    { path: 'how-to-use-doc-overview', label: 'OVERVIEW'},
    { path: 'how-to-use-doc-api', label: 'API'},
    { path: 'how-to-use-doc-examples', label: 'EXAMPLES'}
  ];

  ngOnInit() {
  }

}
