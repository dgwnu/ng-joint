import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardElementsComponent } from './standard-elements.component';

describe('StandardElementsComponent', () => {
  let component: StandardElementsComponent;
  let fixture: ComponentFixture<StandardElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
