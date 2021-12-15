import { MatchService } from './../../../services/match/match.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {

  matchList: any;
  readonly lastRound= 38;
  rounds: number[];
  roundId!: number;

  isPageLoaded=false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private matchService: MatchService, private location: Location) {
    this.matchList=null;
    this.rounds=[];
    this.loadMatchDay();
   }

  ngOnInit(): void {
    
    this.roundId = this.activatedRoute.snapshot.params['roundId'];

    if(this.roundId===undefined || this.roundId<1 || this.roundId===null){
      this.roundId=1;
    } else if(this.roundId>this.lastRound) {
      this.roundId=this.lastRound;
    } 

   this.location.go('matches/round/'+this.roundId);
    this.getMatchesByRound(this.roundId);

  }
  
  loadMatchDay(): void {

      for (let index = 1; index <= this.lastRound; index++) {
        this.rounds.push(index);
        
      }
  }


  goToTheRound(roundId: number) {
    this.router.navigate(['/matches/round/'+roundId]);
    this.roundId=roundId;
  }

  getMatchesByRound(roundId:number) {
    console.log('stary match service')

    this.matchService.getMatchesByRound(roundId).subscribe(
      result => {
        this.isPageLoaded=true;
        this.matchList=result;
        console.log(this.matchList)
      }
    )
  }
}
