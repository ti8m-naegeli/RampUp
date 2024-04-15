import { Injectable } from '@angular/core';
import { Question } from "../model/Question";

export type Game = {
  questions: Question[]
}

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private currentGame: Game | null = null;

  constructor() { }

  startGame(game: Game) {
    this.currentGame = game;
  }

}
