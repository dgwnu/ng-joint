import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaGraphComponent } from './dia-graph.component';

describe('GraphComponent', () => {
  let component: DiaGraphComponent;
  let fixture: ComponentFixture<DiaGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
