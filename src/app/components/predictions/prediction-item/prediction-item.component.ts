import { PredictionService } from 'src/app/services/predictions/prediction.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PredictedMatch } from './../../../model/app-models/match/PredictedMatch';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-prediction-item',
  templateUrl: './prediction-item.component.html',
  styleUrls: ['./prediction-item.component.css']
})
export class PredictionItemComponent implements OnInit {

  isPredictionModeOn:boolean=false;

  predictionForm: FormGroup;
  homeGoals: FormControl;
  awayGoals: FormControl;
  predictionHomeGoals!:number;

  homeGoalsDefault: any;
  awayGoalsDefault: any;

  constructor(private predictionService: PredictionService) {

    this.homeGoals = new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(2)]);
    this.awayGoals = new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(2)]);

    this.predictionForm = new FormGroup({
      homeGoals:this.homeGoals,
      awayGoals:this.awayGoals
    })

   



    console.log(this.prediction)

   }

  @Input()
  @Output()
  prediction!:PredictedMatch

  ngOnInit(): void {

    if(this.prediction.predictionInfo.prediction===null || this.prediction.predictionInfo.prediction===undefined) {
      console.log('NULLOWE' + this.prediction.fixture.fixtureId)
      this.homeGoalsDefault ='';
      this.awayGoalsDefault ='';
    }  else {
      console.log('OK'+ this.prediction.fixture.fixtureId)
      this.homeGoalsDefault = this.prediction.predictionInfo.prediction.predictedHomeGoals;
      this.awayGoalsDefault = this.prediction.predictionInfo.prediction.predictedAwayGoals;
    }

    
    this.homeGoals = new FormControl(this.homeGoalsDefault,[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(2)]);
    this.awayGoals = new FormControl(this.awayGoalsDefault,[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(2)]);

    this.predictionForm = new FormGroup({
      homeGoals:this.homeGoals,
      awayGoals:this.awayGoals
    })
    
  }



  predictMatch():void {


    let fixture:number = this.prediction.fixture.fixtureId; 
    let homeGoals:number = this.homeGoals.value; 
    let awayGoals:number = this.awayGoals.value;; 
    
    this.predictionService.predictMatch(homeGoals,awayGoals,fixture).subscribe(
      result => {
        console.log('RESULT', result)
        this.showAlert();
      }, err => {
        console.log('ERROR', err)
      }
    )


  }

  
  public isVisible: boolean = false;

  showAlert() : void {
    if (this.isVisible) { // if the alert is visible return
      return;
    } 
    this.isVisible = true;
    setTimeout(()=> this.isVisible = false,2500); // hide the alert after 2.5s
  }



}
