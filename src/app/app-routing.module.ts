import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { UserProfileComponent } from './components/profile/user-profile/user-profile.component';
import { PredictionListComponent } from './components/predictions/prediction-list/prediction-list.component';
import { MatchListComponent } from './components/matches/match-list/match-list.component';
import { StandingsComponent } from './components/standings/standings/standings.component';

import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth/auth-guard.service';

const routes: Routes = [
  {
    path: '', component:HomeComponent
  },
  {
    path: 'login', component:LoginComponent
  },
  {
    path: 'register', component:RegisterComponent
  },
  {
    path: 'standings', component:StandingsComponent
  },
  {
    path: 'matches', component:MatchListComponent
  },
  {
    path: 'predictions', component:PredictionListComponent, canActivate: [AuthGuard]
  },
  {
    path: 'profile', component:UserProfileComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
