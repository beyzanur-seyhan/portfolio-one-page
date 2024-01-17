import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import AOS from 'aos';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Beyzanur Seyhan | Frontend Developer');
    this.metaService.addTags([
      { name: 'keywords', content: 'frontend, software, developer' },
      {
        name: 'description',
        content:
          'Merhaba! Ben Beyzanur. Front-end geliştiricisiyim ve yaratıcı çözümler üretmek için tutku dolu biriyim. Portföyümde, bu alanda nasıl gelişiyor olduğumu keşfedin.',
      },
    ]);
  }

  toggleNavbar(event: Event) {
    event.preventDefault();
    document.querySelector('body')?.classList.toggle('nav-active');
  }

  ngOnInit(): void {
    AOS.init({
      duration: 1200,
      // once: true,
    });
  }
}
