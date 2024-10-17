import { Component } from '@angular/core'

@Component({
  selector: 'app-visual-stimuli',
  templateUrl: './visual-stimuli.component.html',
  styleUrls: ['./visual-stimuli.component.css']
})
export class VisualStimuliComponent {
  visuals = [
    { name: 'Fractal Pattern', source: '~/assets/fractal.png' },
    { name: 'Color Gradient', source: '~/assets/gradient.png' },
    { name: 'Bubble Pop', source: '~/assets/bubble.png' },
    { name: 'Finger Painting', source: '~/assets/painting.png' },
  ]

  selectVisual(visual: string) {
    console.log(`Selected visual: ${visual}`)
    // Here you would implement the logic to display the full-screen visual or start the interactive element
  }
}