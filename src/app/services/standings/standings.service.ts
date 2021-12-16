import { LeagueInfo } from './../../model/app-models/standings/LeagueInfo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PredictMatchApi } from '../api-list';

const baseUrl = PredictMatchApi.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  constructor(private http: HttpClient) { }


  getLeagueInfo():Observable<LeagueInfo> {
    return this.http.get<LeagueInfo>(baseUrl + '/standings')
  }
}
