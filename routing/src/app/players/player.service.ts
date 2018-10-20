import {EventEmitter, Injectable} from '@angular/core';
import {Player} from "./player.model";

export class PlayerService {

  players: Player[] = [new Player('Messi', 30), new Player('Ronaldo', 33)];
  playersChanged = new EventEmitter<Player[]>();

  constructor() {}

  getPlayers(): Player[] {
    return this.players.slice();
  }

  addPlayer(player: Player) {
   this.players.push(player);
   this.playersChanged.emit(this.players.slice());
  }

  addPlayers(players: Player[]) {
    this.players.push(...players);
    this.playersChanged.emit(this.players.slice());
  }
}
