import { PredictionHistory } from './PredictionHistory';
import { TeamProfile } from './TeamProfile';
export class Profile {
  public get predictionHistory(): PredictionHistory {
    return this._predictionHistory;
  }
  public set predictionHistory(value: PredictionHistory) {
    this._predictionHistory = value;
  }
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
  public get info(): string {
    return this._info;
  }
  public set info(value: string) {
    this._info = value;
  }
  public get team(): TeamProfile {
    return this._team;
  }
  public set team(value: TeamProfile) {
    this._team = value;
  }
  public get userId(): number {
    return this._userId;
  }
  public set userId(value: number) {
    this._userId = value;
  }
  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }
  public get country(): string {
    return this._country;
  }
  public set country(value: string) {
    this._country = value;
  }
  public get city(): string {
    return this._city;
  }
  public set city(value: string) {
    this._city = value;
  }
    
  constructor(private _city: string,
    private _country: string,
    private _email: string,
    private _info: string,
    private _predictionHistory: PredictionHistory,
    private _team: TeamProfile,
    private _userId: number,
    private _username: string) {

    }
}