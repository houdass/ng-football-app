import { Component, OnDestroy, OnInit } from '@angular/core';
import { Player } from './player.model';
import { PlayerService } from './player.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit, OnDestroy {
  players: Player[];
  playersSubscription: Subscription;

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.players = this.playerService.getPlayers();
    this.playersSubscription = this.playerService.playersChanged.subscribe((players: Player[]) => {
      this.players = players;
    });
  }

  ngOnDestroy() {
    this.playersSubscription.unsubscribe();
  }
}
