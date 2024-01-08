import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleZippyParentComponent } from './example-zippy-parent.component';

describe('ExampleZippyParentComponent', () => {
  let component: ExampleZippyParentComponent;
  let fixture: ComponentFixture<ExampleZippyParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleZippyParentComponent]
    });
    fixture = TestBed.createComponent(ExampleZippyParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
