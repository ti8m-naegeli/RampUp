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

  get result() {
    if (this.currentGame != null) {
      let sum = 0

      this.currentGame.answers.forEach(a => {
        sum += a.selection.some(c => a.question.correctOptions.indexOf(c) > -1) ? 1 : 0;
      })

      return (sum / this.totalQuestions) * 100;
    }

    return 0
  }

  answer(choice: number[]) {
    let question = this.selected

    if (question != null) {
      question.selection = choice
    }

    return this.canProceed ? this.selectedIndex + 1 : null;
  }

}
