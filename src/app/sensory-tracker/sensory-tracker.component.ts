import { Component } from '@angular/core'

@Component({
  selector: 'app-sensory-tracker',
  templateUrl: './sensory-tracker.component.html',
  styleUrls: ['./sensory-tracker.component.css']
})
export class SensoryTrackerComponent {
  triggers = [
    { name: 'Loud Noises', isSelected: false },
    { name: 'Bright Lights', isSelected: false },
    { name: 'Crowds', isSelected: false },
  ]
  customTrigger = ''

  addCustomTrigger() {
    if (this.customTrigger.trim()) {
      this.triggers.push({ name: this.customTrigger.trim(), isSelected: false })
      this.customTrigger = ''
    }
  }

  logOverload() {
    const selectedTriggers = this.triggers.filter(t => t.isSelected).map(t => t.name)
    console.log('Overload logged with triggers:', selectedTriggers)
    // Here you would typically save this data to local storage or a database
  }
}