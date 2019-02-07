import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapesAngularExamplesComponent } from './shapes-angular-examples.component';

describe('ShapesAngularExamplesComponent', () => {
  let component: ShapesAngularExamplesComponent;
  let fixture: ComponentFixture<ShapesAngularExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapesAngularExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapesAngularExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
