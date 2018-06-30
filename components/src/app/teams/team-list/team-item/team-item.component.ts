import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Team } from '../../team.model';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.scss']
})
export class TeamItemComponent implements OnInit {
  @Input() team: Team;
  @Output() selectedTeam = new EventEmitter<Team>();
  constructor() {}

  ngOnInit() {}

  onSelectItem() {
    this.selectedTeam.emit(this.team);
  }
}
