import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <div class="hero-profile">
      <h3>Featured Hero Profile</h3>
      <h4>{{ name }}</h4>
      <p>{{ bio }}</p>
      <strong>Hire this hero today!</strong>
    </div>
  `,
  styles:
  [`.hero-profile{ 
      width: 300px;      /* Set width */
      height: 180px;     /* Set height */
      background-color: #92C7CF; /* Red background color */
      bottom: 10px;      /* Positioning from bottom */
      right: 10px;       /* Positioning from right */
      color: white;      /* Text color */
      font-size: 15px; 
      border-radius: 20px; 
      padding: 10px;
      margin-bottom: 8px;
  }`]
})
export class HeroProfileComponent {
  @Input() name!: string;
  @Input() bio!: string;
}