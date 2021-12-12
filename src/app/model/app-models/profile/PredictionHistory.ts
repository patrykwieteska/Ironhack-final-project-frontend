export class PredictionHistory {
    public get totalPredictions(): number {
        return this._totalPredictions;
    }
    public set totalPredictions(value: number) {
        this._totalPredictions = value;
    }
    public get totalPoints(): number {
        return this._totalPoints;
    }
    public set totalPoints(value: number) {
        this._totalPoints = value;
    }
    public get exactPredictions(): number {
        return this._exactPredictions;
    }
    public set exactPredictions(value: number) {
        this._exactPredictions = value;
    }
    public get correctPredictions(): number {
        return this._correctPredictions;
    }
    public set correctPredictions(value: number) {
        this._correctPredictions = value;
    }
    constructor(private _correctPredictions: number,
        private _exactPredictions: number,
        private _totalPoints: number,
        private _totalPredictions: number) {

        }
}