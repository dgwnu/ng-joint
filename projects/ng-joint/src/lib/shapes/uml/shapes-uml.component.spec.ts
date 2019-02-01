import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapesUmlComponent } from './shapes-uml.component';

describe('ShapesUmlComponent', () => {
  let component: ShapesUmlComponent;
  let fixture: ComponentFixture<ShapesUmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapesUmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapesUmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
