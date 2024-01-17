import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactInformations: {
    title: string;
    link?: string;
    description?: string;
  }[] = [
    {
      title: 'Adres',
      description: 'Nevşehir / Türkiye',
    },
    {
      title: 'E-mail',
      link: 'info@beyzanurseyhan.com',
    },
    {
      title: 'Linkedin',
      link: 'www.linkedin.com/in/beyzanurseyhan/',
    },
    {
      title: 'Github',
      link: 'github.com/beyzanur-seyhan',
    },
    {
      title: 'Twitter',
      link: 'twitter.com/minikfreelancer',
    },
  ];
}
