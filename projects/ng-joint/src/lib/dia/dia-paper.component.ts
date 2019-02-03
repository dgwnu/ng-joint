import {
  Component, ViewChild, ElementRef, ViewEncapsulation, Input,
  ContentChild, AfterViewInit
} from '@angular/core';

import { DiaPaperElement } from './dia-paper-element';
import { DiaPaperService } from './dia-paper.service';
import { DiaGraphComponent } from './dia-graph.component';

@Component({
  selector: 'dgwnu-dia-paper',
  templateUrl: './dia-paper.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DiaPaperComponent implements AfterViewInit {
  @ViewChild('dgwnudiapaper') diaPaperElRef: ElementRef;
  @ContentChild(DiaGraphComponent) graph: DiaGraphComponent;

  @Input() width?: number;
  @Input() height?: number;
  @Input() gridSize?: number;
  @Input() drawGrid?: boolean;

  constructor(private service: DiaPaperService) {}

  paperElement: DiaPaperElement;

  ngAfterViewInit() {
    console.log('+----------------------------------------+');
    console.log('| DiaPaperComponent.ngAfterViewInit      |');
    console.log('+----------------------------------------+');
    console.log('-- BEGIN: Attributes --');
    console.log('DiaPaperComponent.width', this.width);
    console.log('DiaPaperComponent.height', this.height);
    console.log('DiaPaperComponent.gridSize', this.gridSize);
    console.log('DiaPaperComponent.drawGrid', this.drawGrid);
    console.log('DiaPaperComponent.graph', this.graph);
    console.log('-- END: Attributes --');

    // work around (for problem 1st call ngAfterContentInit attributes are not initialized!)
    if (this.graph) {
      this._createPaper();
    }
  }

  private _createPaper() {
    console.log('-- BEGIN: DiaPaperComponent._createPaper --');

    this.paperElement = this.service.createPaper({
      width: this.width,
      height: this.height,
      gridSize: this.gridSize,
      drawGrid: this.drawGrid,
      model: this.graph.graphElement.graph,
      el: this.diaPaperElRef.nativeElement
    });

    this.graph.addShapes();

    this.service.onPaperEvents(this);

    console.log('-- END: DiaPaperComponent._createPaper --');
  }

  onElementPointerClick(cid: string) {
    
  }

}
