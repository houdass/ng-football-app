import { Component, OnInit } from '@angular/core';
import { Player } from './player.model';
import {PlayerService} from "./player.service";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  players: Player[];
  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.players = this.playerService.getPlayers();
    this.playerService.playersChanged.subscribe((players: Player[]) => {
      this.players = players;
    });
  }
}
