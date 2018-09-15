import { Component, OnInit } from '@angular/core';
import { Team } from '../team.model';
import {TeamService} from "../team.service";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  teams: Team[];
  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.teams = this.teamService.getTeams();
  }
}
