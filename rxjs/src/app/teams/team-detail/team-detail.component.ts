import { Component, OnInit } from '@angular/core';
import { Team } from '../team.model';
import { TeamService } from '../team.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {
  team: Team;
  constructor(private teamService: TeamService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.team = this.teamService.getTeam(id);
    });
  }

  ngOnInit() {}

  addPlayersToList() {
    this.teamService.addPlayersToList(this.team.players);
  }

  goToEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
