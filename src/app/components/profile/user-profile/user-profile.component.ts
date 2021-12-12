import { ProfileService } from './../../../services/profile/profile.service';
import { HttpClient } from '@angular/common/http';
import { PredictionHistory } from './../../../model/app-models/profile/PredictionHistory';
import { TeamProfile } from './../../../model/app-models/profile/TeamProfile';
import { Profile } from './../../../model/app-models/profile/Profile';
import { Component, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  tooltipPosition: TooltipPosition = 'right'
  pageLoaded: boolean = false;

  profile: Profile;
  team: TeamProfile;
  predictionHistory: PredictionHistory;

  constructor(private profileService: ProfileService) { 


    this.team = new TeamProfile(
      0,'','',''
    );

    this.predictionHistory = new PredictionHistory(
      0,0,0,0
    );

    this.profile = new Profile(
      '','','','',this.predictionHistory,this.team,0,''
    );

    this.getUserInfo();
  }

  ngOnInit(): void {
  }


  getUserInfo(): void {
    this.profileService.getProfile().subscribe (
      result => {
        console.log(result);
        this.profile=result;
        this.predictionHistory=result.predictionHistory;
        this.team=result.team;
        console.log(this.profile.username)
        console.log(this.team.name)
        this.pageLoaded=true;
      }
    )
       
    
  }
}
