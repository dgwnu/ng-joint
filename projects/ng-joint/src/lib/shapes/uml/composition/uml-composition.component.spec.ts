import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlCompositionComponent } from './uml-composition.component';

describe('UmlCompositionComponent', () => {
  let component: UmlCompositionComponent;
  let fixture: ComponentFixture<UmlCompositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmlCompositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmlCompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
