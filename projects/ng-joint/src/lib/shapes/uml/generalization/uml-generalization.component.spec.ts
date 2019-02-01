import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlGeneralizationComponent } from './uml-generalization.component';

describe('UmlGeneralizationComponent', () => {
  let component: UmlGeneralizationComponent;
  let fixture: ComponentFixture<UmlGeneralizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmlGeneralizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmlGeneralizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
