import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleZippyChildComponent } from './example-zippy-child.component';

describe('ExampleZippyChildComponent', () => {
  let component: ExampleZippyChildComponent;
  let fixture: ComponentFixture<ExampleZippyChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleZippyChildComponent]
    });
    fixture = TestBed.createComponent(ExampleZippyChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
