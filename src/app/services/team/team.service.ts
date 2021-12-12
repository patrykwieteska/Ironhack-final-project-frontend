import { HttpClient } from '@angular/common/http';
import { Team } from './../../model/app-models/Team';
import { PredictMatchApi } from './../api-list';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = PredictMatchApi.BASE_URL;
@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  
  getTeamsList(): Observable<any> {
    return this.http.get<any>(baseUrl+'/teams');
    }
}
