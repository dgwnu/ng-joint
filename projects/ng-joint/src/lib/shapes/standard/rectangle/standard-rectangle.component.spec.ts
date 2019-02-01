import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardRectangleComponent } from './standard-rectangle.component';

describe('RectangleComponent', () => {
  let component: StandardRectangleComponent;
  let fixture: ComponentFixture<StandardRectangleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardRectangleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardRectangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
