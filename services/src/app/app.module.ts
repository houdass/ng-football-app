import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamDetailComponent } from './teams/team-detail/team-detail.component';
import { TeamListComponent } from './teams/team-list/team-list.component';
import { TeamItemComponent } from './teams/team-list/team-item/team-item.component';
import { PlayersComponent } from './players/players.component';
import { PlayerEditComponent } from './players/player-edit/player-edit.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HideDirective } from './directives/hide.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import {TeamService} from "./teams/team.service";
import {PlayerService} from "./players/player.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamsComponent,
    TeamDetailComponent,
    TeamListComponent,
    TeamItemComponent,
    PlayersComponent,
    PlayerEditComponent,
    HighlightDirective,
    HideDirective,
    DropdownDirective
  ],
  imports: [BrowserModule, FormsModule],
  providers: [TeamService, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
