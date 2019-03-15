import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardElementsCodeExample01Component } from './standard-elements-code-example01.component';

describe('StandardElementsCodeExample01Component', () => {
  let component: StandardElementsCodeExample01Component;
  let fixture: ComponentFixture<StandardElementsCodeExample01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardElementsCodeExample01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardElementsCodeExample01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
