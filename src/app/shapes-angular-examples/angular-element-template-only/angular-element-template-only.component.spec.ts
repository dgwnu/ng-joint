import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularElementTemplateOnlyComponent } from './angular-element-template-only.component';

describe('AngularElementTemplateOnlyComponent', () => {
  let component: AngularElementTemplateOnlyComponent;
  let fixture: ComponentFixture<AngularElementTemplateOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularElementTemplateOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularElementTemplateOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
