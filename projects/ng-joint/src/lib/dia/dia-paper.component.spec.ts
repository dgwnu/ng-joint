import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaPaperComponent } from './dia-paper.component';

describe('PaperComponent', () => {
  let component: DiaPaperComponent;
  let fixture: ComponentFixture<DiaPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
