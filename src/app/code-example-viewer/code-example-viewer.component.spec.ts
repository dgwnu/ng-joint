import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeExampleViewerComponent } from './code-example-viewer.component';

describe('CodeExampleViewerComponent', () => {
  let component: CodeExampleViewerComponent;
  let fixture: ComponentFixture<CodeExampleViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeExampleViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeExampleViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
