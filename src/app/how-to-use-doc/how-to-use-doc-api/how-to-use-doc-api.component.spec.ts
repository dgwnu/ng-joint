import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToUseDocApiComponent } from './how-to-use-doc-api.component';

describe('HowToUseDocApiComponent', () => {
  let component: HowToUseDocApiComponent;
  let fixture: ComponentFixture<HowToUseDocApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToUseDocApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToUseDocApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
