import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-how-to-use-doc-examples',
  templateUrl: './how-to-use-doc-examples.component.html',
  styleUrls: ['./how-to-use-doc-examples.component.scss']
})
export class HowToUseDocExamplesComponent implements OnInit {
  @Input() exmaples: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
