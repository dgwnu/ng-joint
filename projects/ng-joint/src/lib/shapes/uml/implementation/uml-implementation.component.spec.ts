import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlImplementationComponent } from './uml-implementation.component';

describe('UmlImplementationComponent', () => {
  let component: UmlImplementationComponent;
  let fixture: ComponentFixture<UmlImplementationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmlImplementationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmlImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
