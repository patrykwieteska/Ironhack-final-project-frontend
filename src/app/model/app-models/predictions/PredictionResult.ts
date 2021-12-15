export class PredictionResult {
    public get points(): number {
        return this._points;
    }
    public set points(value: number) {
        this._points = value;
    }
    public get status(): string {
        return this._status;
    }
    public set status(value: string) {
        this._status = value;
    }
    public get message(): string {
        return this._message;
    }
    public set message(value: string) {
        this._message = value;
    }
    
    constructor(private _message: string,
        private _points: number,
        private _status: string) {

        }
}