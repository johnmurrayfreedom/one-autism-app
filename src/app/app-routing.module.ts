import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { HomeComponent } from './home/home.component'
import { SensoryTrackerComponent } from './sensory-tracker/sensory-tracker.component'
import { CalmingExercisesComponent } from './calming-exercises/calming-exercises.component'
import { VisualStimuliComponent } from './visual-stimuli/visual-stimuli.component'
import { SoundPlayerComponent } from './sound-player/sound-player.component'
import { QuickTipsComponent } from './quick-tips/quick-tips.component'
import { ResourcesComponent } from './resources/resources.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sensory-tracker', component: SensoryTrackerComponent },
  { path: 'calming-exercises', component: CalmingExercisesComponent },
  { path: 'visual-stimuli', component: VisualStimuliComponent },
  { path: 'sound-player', component: SoundPlayerComponent },
  { path: 'quick-tips', component: QuickTipsComponent },
  { path: 'resources', component: ResourcesComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}