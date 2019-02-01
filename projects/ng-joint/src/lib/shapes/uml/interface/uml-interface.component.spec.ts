import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlInterfaceComponent } from './uml-interface.component';

describe('UmlInterfaceComponent', () => {
  let component: UmlInterfaceComponent;
  let fixture: ComponentFixture<UmlInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmlInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmlInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
