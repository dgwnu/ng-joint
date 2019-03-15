import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardLinksCodeExample01Component } from './standard-links-code-example01.component';

describe('StandardLinksCodeExample01Component', () => {
  let component: StandardLinksCodeExample01Component;
  let fixture: ComponentFixture<StandardLinksCodeExample01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardLinksCodeExample01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardLinksCodeExample01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
