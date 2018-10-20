import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Player } from '../player.model';
import {PlayerService} from "../player.service";

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.scss']
})
export class PlayerEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('ageInput') ageInput: ElementRef;
  constructor(private playerService: PlayerService) {}

  ngOnInit() {}

  onAddPlayer() {
    const name = this.nameInput.nativeElement.value;
    const age = this.ageInput.nativeElement.value;
    const newPlayer = new Player(name, age);
    this.playerService.addPlayer(newPlayer);
  }
}
