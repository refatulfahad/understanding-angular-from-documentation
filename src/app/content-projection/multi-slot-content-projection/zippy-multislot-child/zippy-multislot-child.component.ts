import { Component } from '@angular/core';

@Component({
  selector: 'app-zippy-multislot-child',
  template: `
    <h2>Multi-slot content projection</h2>

    Default:
    <ng-content></ng-content>

    Question:
    <ng-content select="[question]"></ng-content>
    <ng-container select="[question]"></ng-container>
  `,
  styleUrls: ['./zippy-multislot-child.component.css']
})
export class ZippyMultislotChildComponent {

}
