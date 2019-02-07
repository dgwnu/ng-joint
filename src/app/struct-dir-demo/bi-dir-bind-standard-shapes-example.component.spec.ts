import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiDirBindStandardShapesExampleComponent } from './bi-dir-bind-standard-shapes-example.component';

describe('BiDirBindStandardShapesExampleComponent', () => {
  let component: BiDirBindStandardShapesExampleComponent;
  let fixture: ComponentFixture<BiDirBindStandardShapesExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiDirBindStandardShapesExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiDirBindStandardShapesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
