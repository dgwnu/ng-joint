import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToUseDocComponent } from './how-to-use-doc.component';

describe('HowToUseDocComponent', () => {
  let component: HowToUseDocComponent;
  let fixture: ComponentFixture<HowToUseDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToUseDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToUseDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
