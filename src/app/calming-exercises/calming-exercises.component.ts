import { Component } from '@angular/core'

@Component({
  selector: 'app-calming-exercises',
  templateUrl: './calming-exercises.component.html',
  styleUrls: ['./calming-exercises.component.css']
})
export class CalmingExercisesComponent {
  exercises = [
    { name: 'Guided Breathing', description: 'Breathe in for 4 seconds, hold for 4 seconds, exhale for 4 seconds.' },
    { name: 'Progressive Muscle Relaxation', description: 'Tense and relax each muscle group, starting from your toes and moving up to your head.' },
    { name: 'Grounding Technique', description: 'Name 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste.' },
  ]

  startExercise(exercise: string) {
    console.log(`Starting exercise: ${exercise}`)
    // Here you would implement the logic to guide the user through the exercise
  }
}