import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-how-to-use-doc-overview',
  templateUrl: './how-to-use-doc-overview.component.html',
  styleUrls: ['./how-to-use-doc-overview.component.scss']
})
export class HowToUseDocOverviewComponent implements OnInit {
  @Input() overview: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
