import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToUseDocOverviewComponent } from './how-to-use-doc-overview.component';

describe('HowToUseDocOverviewComponent', () => {
  let component: HowToUseDocOverviewComponent;
  let fixture: ComponentFixture<HowToUseDocOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToUseDocOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToUseDocOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
