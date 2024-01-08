import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VersionParentComponent } from './component-interaction/Intercept-input-property-changes/version-parent/version-parent.component';
import { VersionChildComponent } from './component-interaction/Intercept-input-property-changes/version-child/version-child.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.config';
import { VoteTakerComponent } from './component-interaction/parent-listens-for-child-event/votetaker/votetaker.component';
import { VoterComponent } from './component-interaction/parent-listens-for-child-event/voter/voter.component';
import { CountdownTimerComponent } from './component-interaction/parent-interacts-with-child-using-local-variable/countdown-timer/countdown-timer.component';
import { CountdownParentComponent } from './component-interaction/parent-interacts-with-child-using-local-variable/countdown-parent/countdown-parent.component';
import { CountdownViewChildParentComponent } from './component-interaction/parent-calls-viewchild/countdown-viewchild-parent/countdown-viewchild-parent.component';
import { MissionControlComponent } from './component-interaction/parent-children-communicate-using-service/missioncontrol/missioncontrol.component';
import { AstronautComponent } from './component-interaction/parent-children-communicate-using-service/astronaut/astronaut.component';
import { ZippyBasicChildComponent } from './content-projection/single-slot-content-projection/zippy-basic-child/zippy-basic-child.component';
import { ZippyBasicParentComponent } from './content-projection/single-slot-content-projection/zippy-basic-parent/zippy-basic-parent.component';
import { ZippyMultislotChildComponent } from './content-projection/multi-slot-content-projection/zippy-multislot-child/zippy-multislot-child.component';
import { ZippyMultislotParentComponent } from './content-projection/multi-slot-content-projection/zippy-multislot-parent/zippy-multislot-parent.component';
import { ExampleZippyChildComponent } from './content-projection/conditional-content-projection/example-zippy-child/example-zippy-child.component';
import { ExampleZippyParentComponent } from './content-projection/conditional-content-projection/example-zippy-parent/example-zippy-parent.component';
import { ZippyContentDirective } from './content-projection/conditional-content-projection/zippy-content.directive';

@NgModule({
  declarations: [
    AppComponent,
    VersionParentComponent,
    VersionChildComponent,
    VoteTakerComponent,
    VoterComponent,
    CountdownParentComponent,
    CountdownTimerComponent,
    CountdownViewChildParentComponent,
    MissionControlComponent,
    AstronautComponent,
    ZippyBasicChildComponent,
    ZippyBasicParentComponent,
    ZippyMultislotChildComponent,
    ZippyMultislotParentComponent,
    ExampleZippyChildComponent,
    ExampleZippyParentComponent,
    ZippyContentDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
