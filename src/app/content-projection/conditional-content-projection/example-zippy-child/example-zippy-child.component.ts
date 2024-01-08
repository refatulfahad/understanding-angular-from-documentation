import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { ZippyContentDirective } from '../zippy-content.directive';


@Component({
  selector: 'app-example-zippy-child',
  templateUrl: './example-zippy-child.component.html',
  styleUrls: ['./example-zippy-child.component.css']
})
export class ExampleZippyChildComponent implements AfterContentInit{
  
  
  @ContentChild(ZippyContentDirective) content!: ZippyContentDirective;
  displayContent = true;
  
  ngAfterContentInit(): void {
    console.log(this.content);
  }
}

