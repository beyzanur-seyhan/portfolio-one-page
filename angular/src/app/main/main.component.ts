import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HomeComponent,
    AboutComponent,
    TechStackComponent,
    PortfolioComponent,
    ContactComponent,
  ],
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  initText() {
    document.querySelectorAll('.txt-fx').forEach(function (element) {
      let newstr = '';
      let count = 0;
      let delay = 100;
      let stagger = 10;
      let words = element.textContent?.split(/\s/);
      let arrWords = new Array();

      words?.forEach(function (value) {
        newstr = '<span class="word">';

        for (let i = 0, l = value.length; i < l; i++) {
          newstr +=
            "<span class='letter' style='transition-delay:" +
            (delay + stagger * count) +
            "ms;'>" +
            value[i] +
            '</span>';
          count++;
        }
        newstr += '</span>';

        arrWords.push(newstr);
        count++;
      });

      element.innerHTML = arrWords.join(
        "<span class='letter' style='transition-delay:" +
          delay +
          "ms;'>&nbsp;</span>"
      );
    });
  }
  ngOnInit(): void {
    this.initText();
  }
}
