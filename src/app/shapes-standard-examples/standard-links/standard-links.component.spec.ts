import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardLinksComponent } from './standard-links.component';

describe('StandardLinksComponent', () => {
  let component: StandardLinksComponent;
  let fixture: ComponentFixture<StandardLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
