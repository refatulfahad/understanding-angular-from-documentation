import { Component } from '@angular/core';

@Component({
  selector: 'app-zippy-multislot-parent',
  template: `<app-zippy-multislot-child>
                <p question>
                  Is content projection cool?
                </p>
                <p>Let's learn about content projection!</p>
             </app-zippy-multislot-child>`,
  styleUrls: ['./zippy-multislot-parent.component.css']
})
export class ZippyMultislotParentComponent {

}
