import { Routes } from '@angular/router';
import { VersionParentComponent } from './component-interaction/Intercept-input-property-changes/version-parent/version-parent.component';
import { VoteTakerComponent } from './component-interaction/parent-listens-for-child-event/votetaker/votetaker.component';
import { CountdownParentComponent } from './component-interaction/parent-interacts-with-child-using-local-variable/countdown-parent/countdown-parent.component';
import { CountdownViewChildParentComponent } from './component-interaction/parent-calls-viewchild/countdown-viewchild-parent/countdown-viewchild-parent.component';
import { MissionControlComponent } from './component-interaction/parent-children-communicate-using-service/missioncontrol/missioncontrol.component';
import { ZippyBasicParentComponent } from './content-projection/single-slot-content-projection/zippy-basic-parent/zippy-basic-parent.component';
import { ZippyMultislotParentComponent } from './content-projection/multi-slot-content-projection/zippy-multislot-parent/zippy-multislot-parent.component';
import { ExampleZippyParentComponent } from './content-projection/conditional-content-projection/example-zippy-parent/example-zippy-parent.component';
import { AdBannerComponent } from './dynamic-components/rendering-components-dynamically/ad-banner/ad-banner.component';

export const routes: Routes = [
    { path: 'intercept-input-property', component: VersionParentComponent },
    { path: 'parent-listens-for-child-event', component: VoteTakerComponent },
    { path: 'parent-interacts-with-child-using-local-variable', component: CountdownParentComponent },
    { path: 'parent-calls-viewchild', component: CountdownViewChildParentComponent },
    { path: 'parent-children-communicate-using-service', component: MissionControlComponent },
    { path: 'single-slot-content-projection', component: ZippyBasicParentComponent },
    { path: 'multi-slot-content-projection', component: ZippyMultislotParentComponent },
    { path: 'conditional-content-projection', component: ExampleZippyParentComponent },
    { path: 'rendering-components-dynamically', component: AdBannerComponent }
];
