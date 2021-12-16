import { StandingsItem } from './StandingsData';
export class LeagueInfo {
    public get country(): string {
        return this._country;
    }
    public set country(value: string) {
        this._country = value;
    }
    public get countryFlag(): string {
        return this._countryFlag;
    }
    public set countryFlag(value: string) {
        this._countryFlag = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
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
    public get season(): number {
        return this._season;
    }
    public set season(value: number) {
        this._season = value;
    }
    public get standings(): StandingsItem[] {
        return this._standings;
    }
    public set standings(value: StandingsItem[]) {
        this._standings = value;
    }

    constructor( private _country: string,
        private _countryFlag: string,
        private _id: number,
        private _logo: string,
        private _name: string,
        private _season: number,
        private _standings: StandingsItem[]) {
        
    }
}