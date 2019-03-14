import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-how-to-use-doc',
  templateUrl: './how-to-use-doc.component.html',
  styleUrls: ['./how-to-use-doc.component.scss']
})
export class HowToUseDocComponent implements OnInit {
  @Input() overview: TemplateRef<any>;
  @Input() api: TemplateRef<any>;
  @Input() examples: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
