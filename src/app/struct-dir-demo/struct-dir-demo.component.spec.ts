import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructDirDemoComponent } from './struct-dir-demo.component';

describe('StructDirDemoComponent', () => {
  let component: StructDirDemoComponent;
  let fixture: ComponentFixture<StructDirDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructDirDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructDirDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
