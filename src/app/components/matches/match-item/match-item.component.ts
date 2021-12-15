import { Match } from './../../../model/app-models/match/Match';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-item',
  templateUrl: './match-item.component.html',
  styleUrls: ['./match-item.component.css']
})
export class MatchItemComponent implements OnInit {

  constructor() { }

  @Input()
  match! : Match


  ngOnInit(): void {
  }

}
