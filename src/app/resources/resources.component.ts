import { Component } from '@angular/core'
import { openUrl } from '@nativescript/core/utils'

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
  resources = [
    { name: 'Autism Pathways Ireland', url: 'https://autismpathways.ie' },
    { name: 'AsIAm', url: 'https://asiam.ie' },
    { name: 'Irish Society for Autism', url: 'https://autism.ie' },
  ]

  openWebsite(url: string) {
    openUrl(url)
  }

  signUpNewsletter() {
    console.log('Signing up for newsletter')
    // Implement newsletter signup logic
  }
}