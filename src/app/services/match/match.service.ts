import { Match } from './../../model/app-models/match/Match';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PredictMatchApi } from '../api-list';


const baseUrl = PredictMatchApi.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }



  getMatchesByRound(roundId: number): Observable<Match[]> {
    return this.http.get<Match[]>(baseUrl +'/fixtures?round='+roundId)
  }
}
