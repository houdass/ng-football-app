import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Team } from '../team.model';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  teams: Team[];
  @Output() selectedTeam = new EventEmitter<Team>();
  constructor() {}

  ngOnInit() {
    this.teams = [
      new Team('FC Barcelone', 'Més que un club', 'http://fc-barcelone.com/assets/img/fcb-logo-big.png'),
      new Team(
        'Real Madrid',
        'Hala Madrid !',
        'https://upload.wikimedia.org/wikipedia/fr/thumb/c/c7/Logo_Real_Madrid.svg/731px-Logo_Real_Madrid.svg.png'
      )
    ];
  }

  onSelectTeam(team) {
    this.selectedTeam.emit(team);
  }
}
