import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Player } from '../player.model';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.scss']
})
export class PlayerEditComponent implements OnInit {
  @Output() playerAdded = new EventEmitter<Player>();
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('ageInput') ageInput: ElementRef;
  constructor() {}

  ngOnInit() {}

  onAddPlayer() {
    const name = this.nameInput.nativeElement.value;
    const age = this.ageInput.nativeElement.value;
    const newPlayer = new Player(name, age);
    this.playerAdded.emit(newPlayer);
  }
}
