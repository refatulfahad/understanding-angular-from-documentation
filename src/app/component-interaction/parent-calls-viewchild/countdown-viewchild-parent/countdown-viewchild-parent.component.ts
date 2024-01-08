import { AfterViewInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { CountdownTimerComponent } from '../../parent-interacts-with-child-using-local-variable/countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-countdown-parent-vc',
  template: `
    <h3>Countdown to Liftoff (via ViewChild)</h3>
    <button type="button" (click)="start()">Start</button>
    <button type="button" (click)="stop()">Stop</button>
    <div class="seconds">{{ seconds() }}</div>
    <div class="seconds">{{ second }}</div>
    <app-countdown-timer></app-countdown-timer>
  `,
  styleUrls: ['../../../../assets/demo.css']
})
export class CountdownViewChildParentComponent implements AfterViewInit {


  @ViewChild(CountdownTimerComponent)
  private timerComponent : CountdownTimerComponent = new CountdownTimerComponent();
  second = 0;

  seconds() {
    this.second = this.timerComponent.seconds;
    return this.timerComponent.seconds;
  }

  ngAfterViewInit() {
    // this.seconds = () => this.timerComponent.seconds
  }

  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }
}