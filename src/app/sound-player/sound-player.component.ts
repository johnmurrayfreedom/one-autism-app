import { Component } from '@angular/core'

@Component({
  selector: 'app-sound-player',
  templateUrl: './sound-player.component.html',
  styleUrls: ['./sound-player.component.css']
})
export class SoundPlayerComponent {
  sounds = [
    { name: 'White Noise', source: '~/assets/white-noise.mp3' },
    { name: 'Rainfall', source: '~/assets/rainfall.mp3' },
    { name: 'Ocean Waves', source: '~/assets/ocean-waves.mp3' },
    { name: 'Forest Sounds', source: '~/assets/forest.mp3' },
  ]
  currentSound: any = null
  isPlaying = false
  duration = 0

  playSound(sound: any) {
    console.log(`Playing sound: ${sound.name}`)
    // Here you would implement the logic to play the selected sound
    this.currentSound = sound
    this.isPlaying = true
  }

  togglePlayPause() {
    this.isPlaying = !this.isPlaying
    // Implement play/pause logic
  }

  setDuration(value: number) {
    this.duration = value
    // Implement timer logic
  }
}