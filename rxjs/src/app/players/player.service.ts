import { Player } from './player.model';
import { Subject } from 'rxjs';

export class PlayerService {
  players: Player[] = [new Player('Messi', 30), new Player('Ronaldo', 33)];
  playersChanged = new Subject<Player[]>();

  constructor() {}

  getPlayers(): Player[] {
    return this.players.slice();
  }

  addPlayer(player: Player) {
    this.players.push(player);
    this.playersChanged.next(this.players.slice());
  }

  addPlayers(players: Player[]) {
    this.players.push(...players);
    this.playersChanged.next(this.players.slice());
  }
}
