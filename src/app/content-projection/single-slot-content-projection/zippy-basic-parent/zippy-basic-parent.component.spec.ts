import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyBasicParentComponent } from './zippy-basic-parent.component';

describe('ZippyBasicParentComponent', () => {
  let component: ZippyBasicParentComponent;
  let fixture: ComponentFixture<ZippyBasicParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZippyBasicParentComponent]
    });
    fixture = TestBed.createComponent(ZippyBasicParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
