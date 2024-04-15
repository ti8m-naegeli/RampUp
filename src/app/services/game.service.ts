import {Injectable} from '@angular/core';
import {Question} from "../model/Question";

export type Game = {
  answers: Answer[]
}

export type Answer = {
  question: Question,
  selection: number[]
}

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private currentGame: Game | null = null;

  private selected: Answer | null = null;

  private selectedIndex: number = 0;

  constructor() {
  }

  startGame(questions: Question[]) {
    this.currentGame = ({answers: questions.map(q => ({question: q, selection: []}))})
  }

  select(questionNumber: number) {
    if (this.currentGame != null) {
      this.selectedIndex = questionNumber;
      this.selected = this.currentGame.answers[questionNumber - 1]

      return this.selected?.question
    }

    return null
  }

  get canProceed() {
    return this.selectedIndex < this.totalQuestions;
  }

  get canGoBack() {
    return this.selectedIndex > 1;
  }

  get totalQuestions() {
    return this.currentGame?.answers.length ?? 0;
  }

  get game() {
    return this.currentGame;
  }

  answer(choice: number[]) {
    let question = this.selected

    if (question != null) {
      question.selection = choice
    }

    return this.canProceed ? this.selectedIndex + 1 : null;
  }

}
