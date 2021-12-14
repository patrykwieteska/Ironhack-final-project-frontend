export class EditForm {
        public get favoriteTeam(): string {
            return this._favoriteTeam;
        }
        public set favoriteTeam(value: string) {
            this._favoriteTeam = value;
        }
        public get city(): string {
            return this._city;
        }
        public set city(value: string) {
            this._city = value;
        }
        public get country(): string {
            return this._country;
        }
        public set country(value: string) {
            this._country = value;
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
        public get teamId(): number {
            return this._teamId;
        }
        public set teamId(value: number) {
            this._teamId = value;
        }

    
        constructor(private _city: string,
            private _country: string,
            private _email: string,
            private _info: string,
            private _teamId: number,
            private _favoriteTeam: string) {

            }
      

}