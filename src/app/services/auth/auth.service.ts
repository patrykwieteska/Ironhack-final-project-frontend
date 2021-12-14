import { Router } from '@angular/router';
import { TokenService } from './token.service';
import { RegisterForm } from './../../model/auth/RegisterForm';
import { Injectable, OnInit } from '@angular/core';
import { PredictMatchApi } from '../api-list';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

const baseUrl = PredictMatchApi.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {



  constructor(private http: HttpClient, public jwtHelper: JwtHelperService, private tokenService: TokenService, private router: Router) { }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login(credentials: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' })

    return this.http.post(baseUrl + '/profile/login', {
      username: credentials.username,
      password: credentials.password
    },
      {
        headers
      })
  }


  register(registerForm: RegisterForm): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' })

    return this.http.post(baseUrl + '/profile/register', {
      username: registerForm.username,
      email: registerForm.email,
      password: registerForm.password,
      repeatedPassword: registerForm.repeatedPassword,
      city: registerForm.city,
      country: registerForm.country,
      info: registerForm.info,
      teamId: registerForm.teamId,

    }, 
    {
      headers,
      responseType: 'text'
    });

  }

  public isAuthenticated() : boolean {
    let token : string | null = this.tokenService.getToken();

    if(token!=null) {
      return !this.jwtHelper.isTokenExpired(token);
    }

    return false;
    
  }

  public logout():void {
    this.router.navigate(['/']);
    this.tokenService.logout();
    window.location.reload();
  }
}

