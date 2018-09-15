import {Component, OnInit} from '@angular/core';
import { Team } from './team.model';
import {TeamService} from "./team.service";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  selectedTeam: Team;
  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.teamService.teamSelected.subscribe((team: Team) => {
      this.selectedTeam = team;
    });
  }
}
