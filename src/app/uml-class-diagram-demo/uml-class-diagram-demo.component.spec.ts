import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlClassDiagramDemoComponent } from './uml-class-diagram-demo.component';

describe('UmlClassDiagramDemoComponent', () => {
  let component: UmlClassDiagramDemoComponent;
  let fixture: ComponentFixture<UmlClassDiagramDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmlClassDiagramDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmlClassDiagramDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
