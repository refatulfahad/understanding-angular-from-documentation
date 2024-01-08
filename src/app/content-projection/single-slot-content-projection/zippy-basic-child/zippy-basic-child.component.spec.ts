import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyBasicChildComponent } from './zippy-basic-child.component';

describe('ZippyBasicChildComponent', () => {
  let component: ZippyBasicChildComponent;
  let fixture: ComponentFixture<ZippyBasicChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZippyBasicChildComponent]
    });
    fixture = TestBed.createComponent(ZippyBasicChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
