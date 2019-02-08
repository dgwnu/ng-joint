import {
  Component, ViewChild, ElementRef, ViewEncapsulation, Input,
  ContentChild, AfterViewInit
} from '@angular/core';

import { DiaPaperElement } from './dia-paper-element';
import { DiaPaperService } from './dia-paper.service';
import { DiaGraphComponent } from './dia-graph.component';

/**
 * NgJoint Dia Graph Component
 *
 * Creates DiaPaperElement (ng-joint-dia-paper)
 *
 * @example
 *
 * <ng-joint-dia-paper
 *  [width]="800"
 *  [height]="600"
 *  [gridSize]="2"
 *  [drawGrid]="true">
 *
 * </ng-joint-dia-paper>
 *
 */
@Component({
  selector: 'ng-joint-dia-paper',
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

  constructor(private service: DiaPaperService, private el: ElementRef) { }

  paperElement: DiaPaperElement;

  ngAfterViewInit() {
    // work around (for problem 1st call ngAfterContentInit attributes are not initialized!)
    if (this.graph) {
      this._createPaper();
    }
    console.log('PaperComponent.offsetParent', this.el.nativeElement.offsetParent);
  }

  private _createPaper() {

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

  }

}
