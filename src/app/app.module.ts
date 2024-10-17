import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { SensoryTrackerComponent } from './sensory-tracker/sensory-tracker.component'
import { CalmingExercisesComponent } from './calming-exercises/calming-exercises.component'
import { VisualStimuliComponent } from './visual-stimuli/visual-stimuli.component'
import { SoundPlayerComponent } from './sound-player/sound-player.component'
import { QuickTipsComponent } from './quick-tips/quick-tips.component'
import { ResourcesComponent } from './resources/resources.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SensoryTrackerComponent,
    CalmingExercisesComponent,
    VisualStimuliComponent,
    SoundPlayerComponent,
    QuickTipsComponent,
    ResourcesComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}