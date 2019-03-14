import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
      <h1>PAGE NOT FOUNT</h1>
      <div>
        This Path is Not Available OR Authorized!
      </div>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
