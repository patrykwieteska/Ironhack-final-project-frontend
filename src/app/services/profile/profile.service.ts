import { AuthService } from 'src/app/services/auth/auth.service';
import { EditForm } from './../../model/app-models/profile/EditForm';
import { Profile } from './../../model/app-models/profile/Profile';
import { TokenService } from './../auth/token.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PredictMatchApi } from '../api-list';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const baseUrl = PredictMatchApi.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private tokenService: TokenService, private auth: AuthService) {

   }

   getProfile():Observable<Profile> {
     return this.http.get<Profile>(baseUrl + '/users?user='+this.tokenService.getCurrentUser())

   }

   editProfile(editForm: EditForm):Observable<Profile> {
    return this.http.put<any>(baseUrl + '/users/'+this.tokenService.getCurrentUser(),{
      email: editForm.email,
      city:editForm.city,
      country:editForm.country,
      info:editForm.info,
      teamId: editForm.teamId,
      favoriteTeam: editForm.favoriteTeam

    })
  }

  deleteProfile():Observable<String> {
    let currentUser: string | null = this.tokenService.getCurrentUser();
    let token: string | null = this.tokenService.getToken();

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer '+token
      })
    }


    this.auth.logout();
    return this.http.delete<String>(baseUrl+ '/users/'+currentUser,httpOptions 
    )
  }
}
