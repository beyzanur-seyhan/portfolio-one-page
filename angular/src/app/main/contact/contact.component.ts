import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactInformation } from './contact-information';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactInformations: ContactInformation[] = [
    {
      title: 'Adres',
      description: 'Nevşehir / Türkiye',
    },
    {
      title: 'E-mail',
      text: 'info@beyzanurseyhan.com',
      link: 'mailto:info@beyzanurseyhan.com'
    },
    {
      title: 'Linkedin',
      text: 'linkedin.com/in/beyzanurseyhan',
      link: 'https://www.linkedin.com/in/beyzanurseyhan/',
    },
    {
      title: 'Github',
      text: 'github.com/beyzanur-seyhan',
      link: 'https://github.com/beyzanur-seyhan',
    },
    {
      title: 'Twitter',
      text: 'twitter.com/minikfreelancer',
      link: 'https://twitter.com/minikfreelancer',
    },
  ];
}
