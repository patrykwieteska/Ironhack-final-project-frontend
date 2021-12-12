import { TokenService } from './../../../services/auth/token.service';
import { LoginForm } from './../../../model/auth/LoginForm';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError: boolean = false;

  loginForm: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor(private authService: AuthService, private tokenService: TokenService, private router:Router) {
    this.username= new FormControl('',[Validators.required]) 
    this.password= new FormControl('',[Validators.required]) 

    this.loginForm = new FormGroup({
      username:this.username,
      password:this.password
    });
  }


  ngOnInit(): void {
    if(this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
    }
  }


  onSubmit(): void {
    let loginPost: LoginForm = new LoginForm(
      this.loginForm.value.username,
      this.loginForm.value.password
    );

    this.authService.login(loginPost).subscribe(
      result=> {
        this.tokenService.saveToken(result.accessToken);
        this.tokenService.saveUser(this.loginForm.value.username);
        this.reloadPage();

      },
      error => {
        this.loginError=true;
      }
    )
    }

  reloadPage(): void {
    window.location.reload();
  }
}
