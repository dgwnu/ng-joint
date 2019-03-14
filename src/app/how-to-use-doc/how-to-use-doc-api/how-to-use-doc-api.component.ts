import { Component, OnInit, Input, TemplateRef  } from '@angular/core';

@Component({
  selector: 'app-how-to-use-doc-api',
  templateUrl: './how-to-use-doc-api.component.html',
  styleUrls: ['./how-to-use-doc-api.component.scss']
})
export class HowToUseDocApiComponent implements OnInit {
  @Input() api: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
