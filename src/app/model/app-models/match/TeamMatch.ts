export class TeamMatch {
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get logo(): string {
        return this._logo;
    }
    public set logo(value: string) {
        this._logo = value;
    }
    public get leagueId(): number {
        return this._leagueId;
    }
    public set leagueId(value: number) {
        this._leagueId = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get form(): string {
        return this._form;
    }
    public set form(value: string) {
        this._form = value;
    }

    constructor(private _form: string,
        private _id: number,
        private _leagueId: number,
        private _logo: string,
        private _name: string) {

    }
}