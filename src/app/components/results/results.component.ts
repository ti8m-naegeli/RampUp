import { Component } from '@angular/core';
import {Answer, Game, GameService} from "../../services/game.service";
import {Router} from "@angular/router";
import {AngularGradientProgressbarModule} from "angular-gradient-progressbar";
import {MarkdownComponent} from "ngx-markdown";

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [
    AngularGradientProgressbarModule,
    MarkdownComponent
  ],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {

  game: Game | null = null;

  constructor(protected gameService: GameService, private router: Router) {
    this.game = gameService.game
  }

  isCorrect(answer: Answer, index: number){
    let shouldBeCorrect = answer.question.correctOptions.indexOf(index) >= 0
    let selectedByUser = answer.selection.indexOf(index) >= 0

    return shouldBeCorrect && selectedByUser
  }

  isCorrectButNotSelected(answer: Answer, index: number) {
    let shouldBeCorrect = answer.question.correctOptions.indexOf(index) >= 0
    let selectedByUser = answer.selection.indexOf(index) >= 0

    return shouldBeCorrect && !selectedByUser
  }

  isIncorrectButSelected(answer: Answer, index: number) {
    let shouldBeCorrect = answer.question.correctOptions.indexOf(index) >= 0
    let selectedByUser = answer.selection.indexOf(index) >= 0

    return !shouldBeCorrect && selectedByUser
  }

  again() {
    this.router.navigate([ "" ])
  }

  calculateResult() {
    if (this.game != null) {

    }

    return null;
  }

}
