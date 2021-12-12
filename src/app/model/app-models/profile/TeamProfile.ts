export class TeamProfile {
    public get logo(): string {
        return this._logo;
    }
    public set logo(value: string) {
        this._logo = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get status(): string {
        return this._status;
    }
    public set status(value: string) {
        this._status = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    constructor(private _id: number,
        private _logo: string,
        private _name: string,
        private _status: string) {

        }
}