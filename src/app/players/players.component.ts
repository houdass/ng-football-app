import { Component, OnInit } from '@angular/core';
import { Player } from './player.model';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  players: Player[];
  constructor() {}

  ngOnInit() {
    this.players = [new Player('Messi', 30), new Player('Ronaldo', 33)];
  }

  onAddPlayer(player: Player) {
    this.players.push(player);
  }
}
