import { DeleteProfileComponent } from './../delete-profile/delete-profile.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TeamService } from './../../../services/team/team.service';
import { Router } from '@angular/router';
import { ProfileService } from './../../../services/profile/profile.service';
import { HttpClient } from '@angular/common/http';
import { PredictionHistory } from './../../../model/app-models/profile/PredictionHistory';
import { TeamProfile } from './../../../model/app-models/profile/TeamProfile';
import { Profile } from './../../../model/app-models/profile/Profile';
import { Component, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { Team } from 'src/app/model/app-models/Team';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppValidator } from 'src/app/validators/AppValidator';
import { EditForm } from 'src/app/model/app-models/profile/EditForm';


export interface UserToDelete {
  username: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  selected;

  isEditMode: boolean = false;

  tooltipPosition: TooltipPosition = 'right'
  pageLoaded: boolean = false;

  profile: Profile;

  teams: Team[] | undefined;

  editForm: FormGroup;
  country: FormControl;
  city: FormControl;
  email: FormControl;
  info: FormControl;
  favoriteTeam: FormControl;


  constructor(private profileService: ProfileService, private teamService: TeamService, public dialog: MatDialog) {

    this.getTeams();


    const team = new TeamProfile(
      0, '', '', ''
    );

    const predictionHistory = new PredictionHistory(
      0, 0, 0, 0
    );

    this.profile = new Profile(
      '', '', '', '', predictionHistory, team, 0, ''
    );

    this.getUserInfo();

    this.selected = this.profile.team.id;



    this.country = new FormControl('', [Validators.minLength(3), Validators.maxLength(30), AppValidator.nameValidator]);
    this.city = new FormControl('', [Validators.minLength(3), Validators.maxLength(30), AppValidator.nameValidator]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.info = new FormControl('', [Validators.maxLength(200)]);
    this.favoriteTeam = new FormControl('');

    this.editForm = new FormGroup({
      email: this.email,
      country: this.country,
      city: this.city,
      info: this.info,
      favoriteTeam: this.favoriteTeam
    })
  }

  ngOnInit(): void {
  }


  getUserInfo(): void {
    this.profileService.getProfile().subscribe(
      result => {
        console.log(result);
        this.profile = result;
        console.log(this.profile.username)
        this.pageLoaded = true;
      }
    )
  }


  getTeams(): void {
    this.teamService.getTeamsList().subscribe(
      result => {
        this.teams = result;
      }
    )
  }

  saveProfile(): void {
    this.pageLoaded = false;

    let editForm: EditForm = new EditForm(
      this.editForm.value.city,
      this.editForm.value.country,
      this.editForm.value.email,
      this.editForm.value.info,
      this.profile.team.id,
      this.editForm.value.favoriteTram
    );

    console.log(editForm);

    this.profileService.editProfile(
      editForm
    ).subscribe(
      result => {
        this.profile = result;
        console.log(result)
        this.pageLoaded = true;

      }, err => console.log(err)
    )


    console.log(this.profile.team.name)
    this.isEditMode = false;
  }

  enableEditMode(): void {
    this.isEditMode = true;
  }

  disableEditMode(): void {
    this.isEditMode = false;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteProfileComponent,
      {
        disableClose:true,
        width: '300px',
        data: this.profile.username
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  
}
