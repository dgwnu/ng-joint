import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to-use-doc',
  templateUrl: './how-to-use-doc.component.html',
  styleUrls: ['./how-to-use-doc.component.scss']
})
export class HowToUseDocComponent implements OnInit {

  constructor() { }

  navLinks = [
    'how-to-use-doc-overview',
    'how-to-use-doc-api',
    'how-to-use-doc-examples'
  ];

  ngOnInit() {
  }

}
