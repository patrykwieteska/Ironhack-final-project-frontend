import { TeamMatch } from './TeamMatch';
export class Match {
      public get awayTeam(): TeamMatch {
        return this._awayTeam;
      }
      public set awayTeam(value: TeamMatch) {
        this._awayTeam = value;
      }
      public get date(): Date {
        return this._date;
      }
      public set date(value: Date) {
        this._date = value;
      }
      public get elapsedTime(): number {
        return this._elapsedTime;
      }
      public set elapsedTime(value: number) {
        this._elapsedTime = value;
      }
      public get fixtureId(): number {
        return this._fixtureId;
      }
      public set fixtureId(value: number) {
        this._fixtureId = value;
      }
      public get homeGoals(): number {
        return this._homeGoals;
      }
      public set homeGoals(value: number) {
        this._homeGoals = value;
      }
      public get homeIsWinner(): true {
        return this._homeIsWinner;
      }
      public set homeIsWinner(value: true) {
        this._homeIsWinner = value;
      }
      public get homeTeam_1(): TeamMatch {
        return this._homeTeam;
      }
      public set homeTeam_1(value: TeamMatch) {
        this._homeTeam = value;
      }
      public get homeTeam(): TeamMatch {
        return this._homeTeam;
      }
      public set homeTeam(value: TeamMatch) {
        this._homeTeam = value;
      }
      public get leagueId(): number {
        return this._leagueId;
      }
      public set leagueId(value: number) {
        this._leagueId = value;
      }
      public get referee(): string {
        return this._referee;
      }
      public set referee(value: string) {
        this._referee = value;
      }
      public get round(): number {
        return this._round;
      }
      public set round(value: number) {
        this._round = value;
      }
      public get status(): string {
        return this._status;
      }
      public set status(value: string) {
        this._status = value;
      }
      public get timezone(): string {
        return this._timezone;
      }
      public set timezone(value: string) {
        this._timezone = value;
      }
      public get venueCity(): string {
        return this._venueCity;
      }
      public set venueCity(value: string) {
        this._venueCity = value;
      }
      public get venueName(): string {
        return this._venueName;
      }
      public set venueName(value: string) {
        this._venueName = value;
      }
      public get awayIsWinner(): true {
        return this._awayIsWinner;
      }
      public set awayIsWinner(value: true) {
        this._awayIsWinner = value;
      }
      public get awayGoals(): number {
        return this._awayGoals;
      }
      public set awayGoals(value: number) {
        this._awayGoals = value;
      }
    
      constructor(private _awayGoals: number,
        private _awayIsWinner: true,
        private _awayTeam: TeamMatch,
        private _date: Date,
        private _elapsedTime: number,
        private _fixtureId: number,
        private _homeGoals: number,
        private _homeIsWinner: true,
        private _homeTeam: TeamMatch,
        private _leagueId: number,
        private _referee: string,
        private _round: number,
        private _status: string,
        private _timezone: string,
        private _venueCity: string,
        private _venueName: string) {

      }
}