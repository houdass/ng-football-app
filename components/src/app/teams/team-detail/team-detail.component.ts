import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../team.model';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {
  @Input() team: Team;
  constructor() {}

  ngOnInit() {}
}
