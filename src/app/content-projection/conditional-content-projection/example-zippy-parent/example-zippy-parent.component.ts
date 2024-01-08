import { Component } from '@angular/core';

@Component({
  selector: 'app-example-zippy-parent',
  template: `
            <app-example-zippy-child>
              <ng-template appExampleZippyContent>
                  <h1>It depends on what you do with it. </h1>
              </ng-template>
            </app-example-zippy-child>
          `,
  styleUrls: ['./example-zippy-parent.component.css']
})

export class ExampleZippyParentComponent {
     
}
