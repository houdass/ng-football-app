import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../../team.model';
import {TeamService} from "../../team.service";

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.scss']
})
export class TeamItemComponent implements OnInit {
  @Input() team: Team;
  constructor(private teamService: TeamService) {}

  ngOnInit() {}

  onSelectItem() {
    this.teamService.teamSelected.emit(this.team);
  }
}
