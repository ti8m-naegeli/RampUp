import {Component, Input} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-external-link',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './external-link.component.html',
  styleUrl: './external-link.component.scss'
})
export class ExternalLinkComponent {

  @Input()
  source: string | undefined

  protected readonly faArrowUpRightFromSquare = faArrowUpRightFromSquare;

}
