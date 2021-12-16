import { PredictionInfo } from './../predictions/PredictionInfo';
import { UserPrediction } from '../predictions/UserPrediction';

import { Match } from 'src/app/model/app-models/match/Match';
export class PredictedMatch {
        public get predictionInfo(): PredictionInfo {
            return this._predictionInfo;
        }
        public set predictionInfo(value: PredictionInfo) {
            this._predictionInfo = value;
        }

        public get fixture(): Match {
            return this._fixture;
        }
        public set fixture(value: Match) {
            this._fixture = value;
        }

        constructor(private _fixture: Match,
           private _predictionInfo: PredictionInfo) {

            }

}