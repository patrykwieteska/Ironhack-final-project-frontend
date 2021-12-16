import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match/match.service';
import { PredictionService } from 'src/app/services/predictions/prediction.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-prediction-list',
  templateUrl: './prediction-list.component.html',
  styleUrls: ['./prediction-list.component.css']
})
export class PredictionListComponent implements OnInit {
  predictionsList: any;
  readonly lastRound= 38;
  rounds: number[];
  roundId!: number;

  isPageLoaded=false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private predictionService: PredictionService,private location: Location) {
    this.predictionsList=null;
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

    this.location.go('predictions/round/'+this.roundId);
    this.goToTheRound(this.roundId);

  }
  
  loadMatchDay(): void {
      for (let index = 1; index <= this.lastRound; index++) {
        this.rounds.push(index);
      }
  }

  goToTheRound(roundId: number) {
    this.router.navigate(['/predictions/round/'+roundId]);
    this.initPredictions(roundId);
    this.roundId=roundId;
  }

  initPredictions(roundId: number) {
    this.predictionService.initPredictionsByRoundId(roundId).subscribe(
      result => {
        console.log(result)
        this.isPageLoaded=true;
        this.predictionsList=result;
      }
    )

  }
}
