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
  readonly mainTitle = 'ng-joint';
  subTitle = '<Initial>';
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
    this.subTitle = 'Overview';
    this.router.navigate([main]);
  }

  getMainTitle(main: string): string {
    this.subTitle = main;
    const mainWords = main.split('-');
    return mainWords[0] + ' ' + mainWords[1];
  }

  getSubTitle(main: string, sub: string): string {
    this.subTitle = main + ' / ' + sub;
    return sub.split('-')[1];
  }

}
