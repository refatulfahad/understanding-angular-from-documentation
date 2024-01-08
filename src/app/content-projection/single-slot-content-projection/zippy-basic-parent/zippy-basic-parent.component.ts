import { Component } from '@angular/core';

@Component({
  selector: 'app-zippy-basic-parent',
  template: `<h1>This is parent.</h1>
             <app-zippy-basic-child>
                  <p>Is content projection cool?</p>
             </app-zippy-basic-child>`,
  styleUrls: ['./zippy-basic-parent.component.css']
})
export class ZippyBasicParentComponent {

}
