import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyMultislotParentComponent } from './zippy-multislot-parent.component';

describe('ZippyMultislotParentComponent', () => {
  let component: ZippyMultislotParentComponent;
  let fixture: ComponentFixture<ZippyMultislotParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZippyMultislotParentComponent]
    });
    fixture = TestBed.createComponent(ZippyMultislotParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
