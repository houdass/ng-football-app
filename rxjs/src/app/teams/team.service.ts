import { Team } from './team.model';
import { Injectable } from '@angular/core';
import { Player } from '../players/player.model';
import { PlayerService } from '../players/player.service';

@Injectable()
export class TeamService {
  teams: Team[] = [
    new Team('FC Barcelone', 'Més que un club', 'http://fc-barcelone.com/assets/img/fcb-logo-big.png', [
      new Player('Andres Iniesta', 33),
      new Player('Gerard Piqué', 29)
    ]),
    new Team(
      'Real Madrid',
      'Hala Madrid !',
      'https://upload.wikimedia.org/wikipedia/fr/thumb/c/c7/Logo_Real_Madrid.svg/731px-Logo_Real_Madrid.svg.png',
      [new Player('Sergio Ramos', 31), new Player('Marcello', 33)]
    )
  ];

  constructor(private playerService: PlayerService) {}

  getTeams(): Team[] {
    return this.teams.slice();
  }

  addPlayersToList(players: Player[]) {
    this.playerService.addPlayers(players);
  }

  getTeam(id: number): Team {
    return this.teams[id];
  }
}
