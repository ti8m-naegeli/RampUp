import { Component } from '@angular/core';
import { QuestionService } from "../../services/question.service";
import { map, Observable } from "rxjs";
import { AsyncPipe } from "@angular/common";
import { Question } from "../../model/Question";
import { GameService } from "../../services/game.service";

export type SelectedTopic = {
  topic: string,
  selected: boolean
}

@Component({
  selector: 'app-test-configuration',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './test-configuration.component.html',
  styleUrl: './test-configuration.component.scss'
})
export class TestConfigurationComponent {

  topics: SelectedTopic[] | null = null;

  availableQuestions = [ 5, 10, 15, 20 ];

  selectedQuestions = 5;

  constructor(private questionService: QuestionService, private gameService: GameService) {
    questionService.topics.pipe(map(topics => topics.map(t => ({ topic: t, selected: false})))).subscribe(t => this.topics = t)
  }

  toggleSelection(topic: SelectedTopic) {
    topic.selected = !topic.selected;
  }

  play() {
    if (this.topics != null) {
      let selectedTopics = this.topics.filter(topic => topic.selected)
                                               .map(t => t.topic);

      this.questionService.getQuestions(this.selectedQuestions, selectedTopics)
                          .subscribe(qs => this.startGame(qs));
    }
  }

  startGame(questions: Question[]) {
    this.gameService.startGame(({questions: questions}))
  }

}
