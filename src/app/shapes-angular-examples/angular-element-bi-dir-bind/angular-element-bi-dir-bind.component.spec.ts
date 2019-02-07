import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularElementBiDirBindComponent } from './angular-element-bi-dir-bind.component';

describe('AngularElementBiDirBindComponent', () => {
  let component: AngularElementBiDirBindComponent;
  let fixture: ComponentFixture<AngularElementBiDirBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularElementBiDirBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularElementBiDirBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
