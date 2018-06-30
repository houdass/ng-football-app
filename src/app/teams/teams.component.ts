import { Component } from '@angular/core';
import { Team } from './team.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {
  selectedTeam: Team;
  constructor() {}

  onSelectTeam(team) {
    this.selectedTeam = team;
  }
}
