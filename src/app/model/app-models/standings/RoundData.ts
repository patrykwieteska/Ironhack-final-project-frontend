export class RoundData {
    public get nextRound(): number {
        return this._nextRound;
    }
    public set nextRound(value: number) {
        this._nextRound = value;
    }
    public get lastRound(): number {
        return this._lastRound;
    }
    public set lastRound(value: number) {
        this._lastRound = value;
    }

    constructor(private _lastRound: number,
        private _nextRound: number) {

        }
}