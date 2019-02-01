import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularElementsDemoComponent } from './angular-elements-demo.component';

describe('AngularElementsDemoComponent', () => {
  let component: AngularElementsDemoComponent;
  let fixture: ComponentFixture<AngularElementsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularElementsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularElementsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
