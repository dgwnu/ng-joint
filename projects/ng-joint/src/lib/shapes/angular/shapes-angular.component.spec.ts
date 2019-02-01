import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapesAngularComponent } from './shapes-angular.component';

describe('ShapesAngularComponent', () => {
  let component: ShapesAngularComponent;
  let fixture: ComponentFixture<ShapesAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapesAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapesAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
