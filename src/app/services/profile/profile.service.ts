import { Profile } from './../../model/app-models/profile/Profile';
import { TokenService } from './../auth/token.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PredictMatchApi } from '../api-list';
import { Observable } from 'rxjs';

const baseUrl = PredictMatchApi.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private tokenService: TokenService) {

   }

   getProfile():Observable<Profile> {
     return this.http.get<Profile>(baseUrl + '/users?user='+this.tokenService.getCurrentUser())

   }
}
