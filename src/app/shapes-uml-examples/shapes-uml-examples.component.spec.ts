import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapesUmlExamplesComponent } from './shapes-uml-examples.component';

describe('ShapesUmlExamplesComponent', () => {
  let component: ShapesUmlExamplesComponent;
  let fixture: ComponentFixture<ShapesUmlExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapesUmlExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapesUmlExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
