import { Team } from './../Team';
export class StandingsItem {
       public get draw(): number {
           return this._draw;
       }
       public set draw(value: number) {
           this._draw = value;
       }
       public get goalsAgainst(): number {
           return this._goalsAgainst;
       }
       public set goalsAgainst(value: number) {
           this._goalsAgainst = value;
       }
       public get goalsDifference(): number {
           return this._goalsDifference;
       }
       public set goalsDifference(value: number) {
           this._goalsDifference = value;
       }
       public get goalsFor(): number {
           return this._goalsFor;
       }
       public set goalsFor(value: number) {
           this._goalsFor = value;
       }
       public get lose(): number {
           return this._lose;
       }
       public set lose(value: number) {
           this._lose = value;
       }
       public get played(): number {
           return this._played;
       }
       public set played(value: number) {
           this._played = value;
       }
       public get points(): number {
           return this._points;
       }
       public set points(value: number) {
           this._points = value;
       }
       public get rank(): number {
           return this._rank;
       }
       public set rank(value: number) {
           this._rank = value;
       }
       public get rankStatus(): string {
           return this._rankStatus;
       }
       public set rankStatus(value: string) {
           this._rankStatus = value;
       }
       public get team(): Team {
           return this._team;
       }
       public set team(value: Team) {
           this._team = value;
       }
       public get win(): number {
           return this._win;
       }
       public set win(value: number) {
           this._win = value;
       }
    
       constructor(private _draw: number,
        private _goalsAgainst: number,
        private _goalsDifference: number,
        private _goalsFor: number,
        private _lose: number,
        private _played: number,
        private _points: number,
        private _rank: number,
        private _rankStatus: string,
        private _team: Team,
        private _win: number) {

        }
      
}