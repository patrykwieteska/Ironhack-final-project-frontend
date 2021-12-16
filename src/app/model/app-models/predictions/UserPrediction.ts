export class UserPrediction {
    public get fixtureId(): number {
        return this._fixtureId;
    }
    public set fixtureId(value: number) {
        this._fixtureId = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get predictedAwayGoals(): number {
        return this._predictedAwayGoals;
    }
    public set predictedAwayGoals(value: number) {
        this._predictedAwayGoals = value;
    }
    public get predictedAwayWinner(): true {
        return this._predictedAwayWinner;
    }
    public set predictedAwayWinner(value: true) {
        this._predictedAwayWinner = value;
    }
    public get predictedHomeGoals(): number {
        return this._predictedHomeGoals;
    }
    public set predictedHomeGoals(value: number) {
        this._predictedHomeGoals = value;
    }
    public get predictedHomeWinner(): true {
        return this._predictedHomeWinner;
    }
    public set predictedHomeWinner(value: true) {
        this._predictedHomeWinner = value;
    }
    public get predictionDate(): Date {
        return this._predictionDate;
    }
    public set predictionDate(value: Date) {
        this._predictionDate = value;
    }
    public get roundId(): number {
        return this._roundId;
    }
    public set roundId(value: number) {
        this._roundId = value;
    }
    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }

    constructor(private _fixtureId: number,
        private _id: string,
        private _predictedAwayGoals: number,
        private _predictedAwayWinner: true,
        private _predictedHomeGoals: number,
        private _predictedHomeWinner: true,
        private _predictionDate: Date,
        private _roundId: number,
        private _username: string) {

        }
}