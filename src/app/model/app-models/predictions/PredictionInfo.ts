import { PredictionResult } from './PredictionResult';
import { UserPrediction } from './UserPrediction';
export class PredictionInfo {
    public get result(): PredictionResult {
        return this._result;
    }
    public set result(value: PredictionResult) {
        this._result = value;
    }
    public get prediction(): UserPrediction {
        return this._prediction;
    }
    public set prediction(value: UserPrediction) {
        this._prediction = value;
    }
    constructor(private _prediction: UserPrediction, private _result: PredictionResult){

    }
}