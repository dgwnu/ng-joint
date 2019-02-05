import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlAbstractComponent } from './uml-abstract.component';

describe('UmlAbstractComponent', () => {
  let component: UmlAbstractComponent;
  let fixture: ComponentFixture<UmlAbstractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmlAbstractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmlAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
