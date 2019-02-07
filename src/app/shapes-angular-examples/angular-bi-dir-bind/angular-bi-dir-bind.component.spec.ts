import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBiDirBindComponent } from './angular-bi-dir-bind.component';

describe('AngularElementBiDirBindComponent', () => {
  let component: AngularBiDirBindComponent;
  let fixture: ComponentFixture<AngularBiDirBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularBiDirBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularBiDirBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
