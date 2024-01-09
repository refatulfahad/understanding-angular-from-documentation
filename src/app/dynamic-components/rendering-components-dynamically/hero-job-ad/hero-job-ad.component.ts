import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <div class="job-ad">
      <h4>{{ headline }}</h4>
      {{ body }}
    </div>
  `,
  styles:[`
     .job-ad{ 
      width: 300px;      /* Set width */
      height: 100px;     /* Set height */
      background-color: #86B6F6; /* Red background color */
      bottom: 10px;      /* Positioning from bottom */
      right: 10px;       /* Positioning from right */
      color: white;      /* Text color */
      font-size: 15px; 
      border-radius: 20px; 
      padding: 10px;
      margin-bottom: 8px;
     }`]
})
export class HeroJobAdComponent {
  @Input() headline!: string;
  @Input() body!: string;
}