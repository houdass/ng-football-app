import {Player} from "../players/player.model";

export class Team {
  constructor(public name: string,
              public description: string,
              public image: string,
              public players: Player[]) {}
}
