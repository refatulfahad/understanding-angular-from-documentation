import { AsyncPipe, NgComponentOutlet } from "@angular/common";
import { Component } from "@angular/core";
import { AdService } from "../ad.service";

@Component({
  selector: 'app-ad-banner',
  standalone: true,
  imports: [NgComponentOutlet, AsyncPipe],
  template: `
    <div class="ad-banner-example">
      <h3>Advertisements</h3>
      <ng-container *ngComponentOutlet="
        currentAd.component;
        inputs: currentAd.inputs;
      " />
      <button (click)="displayNextAd()"
      style="border-radius: 5px; border-style: none; font-size:15px; background-color: #8E8FFA; cursor: pointer; color: white; padding: 5px;">
      Next</button>
    </div>
  `,
  styles:[`
      .ad-banner-example{
        width: 350px;      /* Set width */
        height: 300px;     /* Set height */
        background-color: #637E76; /* Red background color */
        color: white;
        border-radius: 8px;
        position: relative;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 30px;
      }
  `]
})
export class AdBannerComponent {

  constructor(private adService: AdService) { }
  private adList = this.adService.getAds();

  private currentAdIndex = 0;

  get currentAd() {
    return this.adList[this.currentAdIndex];
  }

  displayNextAd() {
    this.currentAdIndex++;
    // Reset the current ad index back to `0` when we reach the end of an array.
    if (this.currentAdIndex === this.adList.length) {
      this.currentAdIndex = 0;
    }
  }
}