import { Injectable } from '@angular/core';


const ACCESS_TOKEN = 'accessToken'
const CURRENT_USER = 'currentUser'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }


logout(): void {
  window.sessionStorage.clear();
}

public saveToken(token: string): void {
  console.log(token)
  window.sessionStorage.removeItem(ACCESS_TOKEN);
  window.sessionStorage.setItem(ACCESS_TOKEN, token);
}

public getToken(): string | null {
  return sessionStorage.getItem(ACCESS_TOKEN);
}

public saveUser(user : string): void {
  window.sessionStorage.removeItem(CURRENT_USER);
  window.sessionStorage.setItem(CURRENT_USER, user);
}

public getCurrentUser(): string | null {
  return sessionStorage.getItem(CURRENT_USER);
}


}
