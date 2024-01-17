import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { ProjectCard } from './project-card';
import { CommonModule } from '@angular/common';
// register Swiper custom elements
register();

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PortfolioComponent {
  projectCard: ProjectCard[] = [
    {
      title: 'E-Ticaret',
      link: 'e-commerce-web-page',
      imgName: 'item1',
      languages: ['javascript'],
    },
    {
      title: 'Form Builder',
      link: 'form-builder',
      imgName: 'item2',
      languages: ['html', 'sass', 'javascript'],
    },
    {
      title: 'Seyahat Rezervasyon',
      link: 'travel-bootcamp-project',
      imgName: 'item3',
      languages: ['javascript', 'angular.js'],
    },
    {
      title: 'Haber Web Sayfası',
      link: 'responsive-news-website',
      imgName: 'item4',
      languages: ['html', 'css'],
    },
  ];
}
