import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapesStandardComponent } from './shapes-standard.component';

describe('ShapesStandardComponent', () => {
  let component: ShapesStandardComponent;
  let fixture: ComponentFixture<ShapesStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapesStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapesStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
