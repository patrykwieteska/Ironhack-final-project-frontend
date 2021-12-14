import { MatchService } from './../../../services/match/match.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {

  rounds: number[];
  roundId!: number;
  selected=1;

  isPageLoaded=false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private matchService: MatchService) {
    this.rounds=[];
    this.loadMatchDay();
   }

  ngOnInit(): void {let roundId = this.activatedRoute.snapshot.params['roundId'];
    if(roundId===undefined){
      roundId=1;

    }
    this.roundId=roundId;
    this.getMatchesByRound(roundId);
  }

  myControl = new FormControl();
  
  loadMatchDay(): void {

      for (let index = 1; index <= 34; index++) {
        this.rounds.push(index);
        
      }
  }


  goToTheRound(roundId: number) {
    this.router.navigate(['/matches/round/'+roundId]);
    this.getMatchesByRound(roundId);
  }

  getMatchesByRound(roundId:number) {
    console.log('stary match service')

    this.matchService.getMatchesByRound(roundId).subscribe(
      result => {
        console.log(result)
        this.isPageLoaded=true;
      }
    )
  }
}
