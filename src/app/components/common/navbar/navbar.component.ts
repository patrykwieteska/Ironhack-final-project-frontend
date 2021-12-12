import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from './../../../services/auth/token.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuthenticated:boolean = this.auth.isAuthenticated();

  constructor(private tokenService: TokenService, private router: Router, private auth: AuthService) { 
  }

  ngOnInit(): void {
  }


  logout():void {
    this.tokenService.logout();
    console.log('logout')
    console.log('token ',this.tokenService.getToken())
    window.location.reload();
  }
}
