import { Injectable } from '@angular/core';
import { Question } from "../model/Question";
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questions$ = new BehaviorSubject<Question[]>([]);

  constructor(client: HttpClient) {
    client.get<Question[]>("/assets/questions.json")
          .subscribe(q => this.questions$.next(q));
  }

  get topics() {
    return this.questions$.pipe(map(qs => qs.flatMap(q => q.topics).filter((value, index, array) => array.indexOf(value) === index).sort()));
  }

  getQuestions(count: number, topics: string[]) {
    return this.questions$.pipe(map(qs => qs.filter(q => this.contains(topics, q.topics)).sort(this.compare).slice(0, count)));
  }

  contains(expected : string[], actual: string[]) {
    return actual.some(t => expected.some(a => a == t))
  }

  compare(a: Question, b: Question) {
    return 0.5 - Math.random();
  };

}
