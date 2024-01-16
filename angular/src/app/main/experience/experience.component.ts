import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  selectPercent(percent: number): string {
    let computedPercent: string;
    switch (percent) {
      case 70:
        computedPercent = 'seventy';
        break;
      case 75:
        computedPercent = 'seventy-five';
        break;
      case 80:
        computedPercent = 'eighty';
        break;
      case 90:
        computedPercent = 'ninety';
        break;
      default:
        computedPercent = '';
        break;
    }
    return computedPercent;
  }

  skillsets: {
    title: string;
    percentage: number;
  }[][] = [
    [
      {
        title: 'Figma',
        percentage: 70,
      },
      {
        title: 'HTML, HTML5',
        percentage: 90,
      },
      {
        title: 'CSS, CSS3',
        percentage: 90,
      },
      {
        title: 'Sass',
        percentage: 80,
      },
      {
        title: 'Javascript',
        percentage: 80,
      },
    ],
    [
      {
        title: 'TypeScript',
        percentage: 70,
      },
      {
        title: 'Bootstrap, Tailwind',
        percentage: 75,
      },
      {
        title: 'React',
        percentage: 70,
      },
      {
        title: 'Git',
        percentage: 70,
      },
      {
        title: 'Visual Studio Code',
        percentage: 80,
      },
    ],
  ];
}
