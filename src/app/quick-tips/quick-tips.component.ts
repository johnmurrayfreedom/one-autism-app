import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-quick-tips',
  templateUrl: './quick-tips.component.html',
  styleUrls: ['./quick-tips.component.css']
})
export class QuickTipsComponent implements OnInit {
  tips = [
    'Find a quiet space to retreat to when feeling overwhelmed.',
    'Use noise-cancelling headphones in loud environments.',
    'Carry sunglasses to reduce visual stimulation when needed.',
    'Practice deep breathing exercises regularly.',
    'Use fidget toys to help manage stress and anxiety.',
  ]
  currentTip = ''

  ngOnInit() {
    this.showRandomTip()
  }

  showRandomTip() {
    const randomIndex = Math.floor(Math.random() * this.tips.length)
    this.currentTip = this.tips[randomIndex]
  }
}