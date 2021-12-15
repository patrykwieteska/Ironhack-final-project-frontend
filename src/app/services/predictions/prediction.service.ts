import { PredictionInfo } from './../../model/app-models/predictions/PredictionInfo';
import { PredictedMatch } from './../../model/app-models/match/PredictedMatch';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './../auth/token.service';
import { PredictMatchApi } from './../api-list';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = PredictMatchApi.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  constructor(private tokenService: TokenService, private http: HttpClient) { }

  initPredictionsByRoundId(roundId: number): Observable<PredictedMatch> {
    let currentUser = this.tokenService.getCurrentUser();

    if (currentUser === null) {
      currentUser = '';
    }

    let request: PredictionsByRoundRequest = {
      round: roundId,
      username: currentUser
    }

    return this.http.post<PredictedMatch>(BASE_URL + '/predictions', request);

  }
  predictMatch(homeGoals: number, awayGoals: number,fixtureId: number): Observable<any> {

    let currentUser = this.tokenService.getCurrentUser();

    if (currentUser === null) {
      currentUser = '';
    }

    let request: UserPredictionRequest = {
      fixtureId: fixtureId,
      predictedAwayGoals: awayGoals,
      predictedHomeGoals: homeGoals,
      username: currentUser
    }

    return this.http.post<PredictionInfo>(BASE_URL + '/predictions/new', request);

  }
}





interface PredictionsByRoundRequest {
  round: number,
  username: string
}



interface UserPredictionRequest {
  fixtureId: number,
  predictedAwayGoals: number,
  predictedHomeGoals: number,
  username: string
}

