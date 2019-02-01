import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardLinkComponent } from './standard-link.component';

describe('StandardLinkComponent', () => {
  let component: StandardLinkComponent;
  let fixture: ComponentFixture<StandardLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
