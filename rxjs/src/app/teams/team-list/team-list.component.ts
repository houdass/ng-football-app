import { Component, OnInit } from '@angular/core';
import { Team } from '../team.model';
import { TeamService } from '../team.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  teams: Team[];
  constructor(private teamService: TeamService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.teams = this.teamService.getTeams();
  }

  goToNew() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
