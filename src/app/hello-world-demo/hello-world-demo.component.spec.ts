import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldDemoComponent } from './hello-world-demo.component';

describe('HelloWorldDemoComponent', () => {
  let component: HelloWorldDemoComponent;
  let fixture: ComponentFixture<HelloWorldDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloWorldDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
