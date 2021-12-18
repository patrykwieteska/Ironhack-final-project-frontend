import { RoundData } from './../../../model/app-models/standings/RoundData';
import { StandingsService } from 'src/app/services/standings/standings.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from './../../../services/auth/token.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  roundData:RoundData;

  isAuthenticated:boolean = this.auth.isAuthenticated();

  constructor(private tokenService: TokenService, private router: Router, private auth: AuthService, private standingsService: StandingsService) { 
    this.roundData = new RoundData(1,1);
    this.getLastAndNextRound();

  }

  ngOnInit(): void {
  }





  logout():void {
    this.auth.logout();
  }

  
  getLastAndNextRound():void {
    this.standingsService.getLastPlayedRound().subscribe (
      result => {
        this.roundData=result;
        console.log('ROUNDDATA', this.roundData)
      }

    )
  }


}
