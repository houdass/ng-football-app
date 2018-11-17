import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  feature = 'teams';
  ngOnInit() {}

  onSelectFeature(feature) {
    this.feature = feature;
  }
}
