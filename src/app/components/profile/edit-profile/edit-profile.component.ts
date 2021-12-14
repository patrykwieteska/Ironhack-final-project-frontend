import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team/team.service';
import { AppValidator } from 'src/app/validators/AppValidator';
import { Team } from 'src/app/model/app-models/Team';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { TeamProfile } from 'src/app/model/app-models/profile/TeamProfile';
import { PredictionHistory } from 'src/app/model/app-models/profile/PredictionHistory';
import { Profile } from 'src/app/model/app-models/profile/Profile';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  usernameAlreadyExists: boolean;
  emailAlreadyExists: boolean;
  profile: any;

  teams: Team[] | undefined;

  pageLoaded: boolean = true;

  editForm:FormGroup;
  username:FormControl;
  password:FormControl;
  passwordConfirmation:FormControl;
  country:FormControl;
  city:FormControl;
  fovoriteTeam:FormControl;
  email:FormControl;
  info:FormControl;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute , private teamService: TeamService,private profileService: ProfileService) {
    this.getTeams();
    this.profile = this.route.snapshot.paramMap.get('userProfile');

    console.log(this.profile)

    // const team = new TeamProfile(
    //   0,'','',''
    // );

    // const predictionHistory = new PredictionHistory(
    //   0,0,0,0
    // );

    // this.profile = new Profile(
    //   '','','','',predictionHistory,team,0,''
    // );

    // this.getUserInfo();

    this.username = new FormControl('',[Validators.required, Validators.nullValidator,Validators.minLength(5),Validators.maxLength(30),AppValidator.nameValidator]);
    this.password = new FormControl('',[Validators.required, Validators.minLength(8),Validators.maxLength(30)]);
    this.passwordConfirmation = new FormControl('',[Validators.required, Validators.minLength(8),Validators.maxLength(30), AppValidator.passwordValidator]);
    this.country = new FormControl('',[Validators.minLength(3),Validators.maxLength(30)]);
    this.city = new FormControl('',[Validators.minLength(3),Validators.maxLength(30)]);
    this.fovoriteTeam = new FormControl('',[Validators.required]);
    this.email = new FormControl('',[Validators.required,Validators.email]);
    this.info = new FormControl('',[Validators.maxLength(200)]);

    this.editForm = new FormGroup({
      username:this.username,
      email:this.email,
      password:this.password,
      passwordConfirmation:this.passwordConfirmation,
      country:this.country,
      city:this.city,
      fovoriteTeam:this.fovoriteTeam,
      info:this.info
    },[AppValidator.passwordValidator])


    this.usernameAlreadyExists = false;
    this.emailAlreadyExists = false;
   }

  ngOnInit(): void {
  }

  getTeams(): void {
    this.teamService.getTeamsList().subscribe(
      result => {
        this.teams = result;
      }
    )
  }


  // getUserInfo(): void {
  //   this.profileService.getProfile().subscribe (
  //     result => {
  //       console.log(result);
  //       this.profile=result;
  //       console.log(this.profile.username)
  //       this.pageLoaded=true;
  //     }
  //   )
       
    
  // }

  saveProfile(): void {

    this.router.navigate(['/profile'])
  }

}
