import { StandingsService } from './../../../services/standings/standings.service';
import { LeagueInfo } from './../../../model/app-models/standings/LeagueInfo';
import { StandingsItem } from './../../../model/app-models/standings/StandingsData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {

  standings: StandingsItem[];
  leagueInfo!: LeagueInfo;

  isPageLoaded=false;

  constructor(private standingsService:StandingsService) { 

    this.standings=[]

    this.getLeagueData();
  }

  ngOnInit(): void {
  }


  getLeagueData():void {
    
    
    
    this.standingsService.getLeagueInfo().subscribe(
      result => {
        console.log(result)
        this.leagueInfo=result
        this.standings=this.leagueInfo.standings;
        console.log(this.standings)
        this.isPageLoaded=true;
      }
    )
  }

}
