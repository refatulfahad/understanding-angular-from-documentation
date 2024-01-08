import { Component } from '@angular/core';

@Component({
  selector: 'app-zippy-basic-child',
  template: `
    <h2>Single-slot content projection</h2>
    <ng-content></ng-content>
  `,
  styleUrls: ['./zippy-basic-child.component.css']
})

export class ZippyBasicChildComponent {

}

