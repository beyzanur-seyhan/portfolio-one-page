import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navbarItems: {
    href: string;
    text: string;
  }[] = [
    {
      href: "home",
      text: "Anasayfa"
    },
    {
      href: "about",
      text: "Beni Tanıyın"
    },
    {
      href: "tech-stack",
      text: "Teknolojiler"
    },
    {
      href: "portfolio",
      text: "Projelerim"
    },
    {
      href: "contact",
      text: "İletişim"
    }
  ]

  socialItems: {
    href: string;
    name: string;
  }[] = [
    {
      href: "github.com/beyzanur-seyhan",
      name: "github"
    },
    {
      href: "www.linkedin.com/in/beyzanurseyhan/",
      name: "linkedin"
    },
    {
      href: "medium.com/@beyzanurseyhan",
      name: "medium"
    },
    {
      href: "twitter.com/minikfreelancer",
      name: "twitter"
    },
  ]
}
