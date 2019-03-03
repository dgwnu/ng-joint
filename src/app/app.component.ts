import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-jointjs';

  constructor(private router: Router) {}

  onExamplesOverviewPage(examples: string) {
    this.router.navigate([examples + '-examples']);
  }

}
