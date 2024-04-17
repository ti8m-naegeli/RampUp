import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

import {AngularGradientProgressbarModule} from "angular-gradient-progressbar";
import {MARKED_OPTIONS, provideMarkdown} from 'ngx-markdown';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faCircleQuestion} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AngularGradientProgressbarModule,
    FaIconComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    provideMarkdown({
      markedOptions: {
        provide: MARKED_OPTIONS,
        useValue: {
          gfm: true,
          breaks: true
        },
      },
    })
  ]
})
export class AppComponent {
  title = 'ramp-up';

  protected readonly faGithub = faGithub;
  protected readonly faCircleQuestion = faCircleQuestion;

}
