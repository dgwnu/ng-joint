import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTemplateOnlyComponent } from './angular-template-only.component';

describe('AngularElementTemplateOnlyComponent', () => {
  let component: AngularTemplateOnlyComponent;
  let fixture: ComponentFixture<AngularTemplateOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTemplateOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTemplateOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
