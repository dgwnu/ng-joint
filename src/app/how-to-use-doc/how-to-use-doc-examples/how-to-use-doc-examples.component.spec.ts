import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToUseDocExamplesComponent } from './how-to-use-doc-examples.component';

describe('HowToUseDocExamplesComponent', () => {
  let component: HowToUseDocExamplesComponent;
  let fixture: ComponentFixture<HowToUseDocExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToUseDocExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToUseDocExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
