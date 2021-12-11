export class RegisterForm {
        public get username(): string {
            return this._username;
        }
        public set username(value: string) {
            this._username = value;
        }
        public get teamId(): number {
            return this._teamId;
        }
        public set teamId(value: number) {
            this._teamId = value;
        }
        public get repeatedPassword(): string {
            return this._repeatedPassword;
        }
        public set repeatedPassword(value: string) {
            this._repeatedPassword = value;
        }
        public get password(): string {
            return this._password;
        }
        public set password(value: string) {
            this._password = value;
        }
        public get info(): string {
            return this._info;
        }
        public set info(value: string) {
            this._info = value;
        }
        public get email(): string {
            return this._email;
        }
        public set email(value: string) {
            this._email = value;
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
    
        constructor(private _username: string,
            private _email: string,
            private _password: string,
            private _repeatedPassword: string,
            private _country: string,
            private _city: string,
            private _info: string,
            private _teamId: number,
            ) {

            }


      


}