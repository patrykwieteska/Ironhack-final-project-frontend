import { PredictionService } from 'src/app/services/predictions/prediction.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PredictedMatch } from './../../../model/app-models/match/PredictedMatch';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prediction-item',
  templateUrl: './prediction-item.component.html',
  styleUrls: ['./prediction-item.component.css']
})
export class PredictionItemComponent implements OnInit {

  predictionForm: FormGroup;
  homeGoals: FormControl;
  awayGoals: FormControl;

  constructor(private predictionService: PredictionService) {

    this.homeGoals = new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(2)]);
    this.awayGoals = new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(2)]);

    this.predictionForm = new FormGroup({
      homeGoals:this.homeGoals,
      awayGoals:this.awayGoals
    })
   }

  @Input()
  prediction!:PredictedMatch

  ngOnInit(): void {
  }

  predictMatch():void {

  }

}
