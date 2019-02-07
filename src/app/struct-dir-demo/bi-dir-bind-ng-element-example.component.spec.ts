import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiDirBindNgElementExampleComponent } from './bi-dir-bind-ng-element-example.component';

describe('BiDirBindNgElementExampleComponent', () => {
  let component: BiDirBindNgElementExampleComponent;
  let fixture: ComponentFixture<BiDirBindNgElementExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiDirBindNgElementExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiDirBindNgElementExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
