import { Injectable } from '@angular/core';


const ACCESS_TOKEN = 'accessToken'

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


}
