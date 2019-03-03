import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface ExamplesInterface {
  main: string;
  subs: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  initialized = false;
  title = 'ng-jointjs';
  examplesList: ExamplesInterface[] = [
    {
      main: 'shapes-standard-examples',
      subs: [
        'standard-elements',
        'standard-links'
      ]
    }
  ];



  constructor(private router: Router) {}

  ngOnInit() {
    this.initialized = true;
  }

  onOverview(main: string) {
    this.router.navigate([main]);
  }

  getMainTitle(main: string): string {
    return main.split('-')[0];
  }

  getSubTitle(sub: string): string {
    return sub.split('-')[1];
  }

}
