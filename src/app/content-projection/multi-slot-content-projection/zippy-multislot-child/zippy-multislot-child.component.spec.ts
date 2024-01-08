import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyMultislotChildComponent } from './zippy-multislot-child.component';

describe('ZippyMultislotChildComponent', () => {
  let component: ZippyMultislotChildComponent;
  let fixture: ComponentFixture<ZippyMultislotChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZippyMultislotChildComponent]
    });
    fixture = TestBed.createComponent(ZippyMultislotChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
