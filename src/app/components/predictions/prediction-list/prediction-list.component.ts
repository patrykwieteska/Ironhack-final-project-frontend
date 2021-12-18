import { RoundData } from './../../../model/app-models/standings/RoundData';
import { StandingsService } from 'src/app/services/standings/standings.service';
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
  roundData!: RoundData;

  isPageLoaded=false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private predictionService: PredictionService,private location: Location, private standingsService: StandingsService) {
    this.predictionsList=null;
    this.rounds=[];
    this.loadMatchDay();
    
   }

  ngOnInit(): void {
    this.getLastPlayedRound();
    
    this.roundId = this.activatedRoute.snapshot.params['roundId'];
    console.log(this.roundId)

    if(this.roundId===undefined || this.roundId<1 || this.roundId===null){
      this.roundId=this.roundData.lastRound;
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

  getLastPlayedRound(): void {
    this.standingsService.getLastPlayedRound().subscribe (
      result => {
        console.log(result);

        this.roundData = new RoundData(result.lastRound,result.nextRound);

        console.log(this.roundData.nextRound)
        console.log(this.roundData.lastRound),console.error
        
      }
    )
  }
}
