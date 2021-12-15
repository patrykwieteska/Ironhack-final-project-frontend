import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match/match.service';

@Component({
  selector: 'app-prediction-list',
  templateUrl: './prediction-list.component.html',
  styleUrls: ['./prediction-list.component.css']
})
export class PredictionListComponent implements OnInit {

  matchList: any;
  readonly lastRound= 38;
  rounds: number[];
  roundId!: number;

  isPageLoaded=false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private matchService: MatchService) {
    this.matchList=null;
    this.rounds=[];
    this.loadMatchDay();
   }

  ngOnInit(): void {
    
    let roundId = this.activatedRoute.snapshot.params['roundId'];

    if(roundId===undefined || roundId<1){
      roundId=1;
    } else if(roundId>this.lastRound) {
      roundId=this.lastRound;
    } else {

      this.roundId=roundId;
      this.getMatchesByRound(roundId);
    }



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

    this.matchService.getMatchesByRound(roundId).subscribe(
      result => {
        this.isPageLoaded=true;
        this.matchList=result;
        console.log('Match list initiated')
      }
    )
  }
}
