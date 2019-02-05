import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlClassComponent } from './uml-class.component';

describe('UmlClassComponent', () => {
  let component: UmlClassComponent;
  let fixture: ComponentFixture<UmlClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmlClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmlClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
