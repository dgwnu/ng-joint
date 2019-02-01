import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlAggregationComponent } from './uml-aggregation.component';

describe('UmlAggregationComponent', () => {
  let component: UmlAggregationComponent;
  let fixture: ComponentFixture<UmlAggregationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmlAggregationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmlAggregationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
