import {Component, OnInit} from '@angular/core';
import {GameService} from "../../services/game.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Question} from "../../model/Question";

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent implements OnInit {

  question: Question | null = null;

  answers: number[] = [];

  currentQuestion: number | null = null;

  constructor(protected gameService: GameService, private route: ActivatedRoute, protected router: Router) {

  }

  ngOnInit() {
    let number = this.route.snapshot.paramMap.get("question")


    if (number != null) {
      let question = parseInt(number)

      this.currentQuestion = question;
      this.question = this.gameService.select(question)
    }
  }

  toggle(index: number) {
    if (this.isSelected(index)) {
      let arrayIndex = this.answers.indexOf(index);
      this.answers.splice(arrayIndex, 1);
    } else {
      this.answers.push(index);
    }
  }

  isSelected(index: number) {
    return this.answers.some(a => a == index);
  }

  answer() {
    let nextQuestion = this.gameService.answer(this.answers)

    if (nextQuestion != null) {
      this.router.navigate([`game/${nextQuestion}`])

    } else {
      this.router.navigate([`results`])
    }
  }

  back() {
    let index = (this.currentQuestion ?? 0) - 1
    this.router.navigate([`game/${index}`])
  }

}
