import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
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
}
