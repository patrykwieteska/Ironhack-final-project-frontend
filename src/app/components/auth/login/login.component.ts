import { TokenService } from './../../../services/auth/token.service';
import { LoginForm } from './../../../model/auth/LoginForm';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;

  loginForm: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor(private authService: AuthService, private tokenService: TokenService) {
    this.username= new FormControl('',[Validators.required]) 
    this.password= new FormControl('',[Validators.required]) 

    this.loginForm = new FormGroup({
      username:this.username,
      password:this.password
    });
  }


  ngOnInit(): void {
  }


  onSubmit(): void {
    console.log('Login form');
    console.log(this.loginForm.value.username);
    console.log(this.loginForm.value.password);

    let loginPost: LoginForm = new LoginForm(
      this.loginForm.value.username,
      this.loginForm.value.password
    );


    this.authService.login(loginPost).subscribe(
      (data) => {
        this.tokenService.saveToken(data.accessToken);
        console.log(data.accessToken)
        this.isLoggedIn
      }
    )
  }



  refreshPage():void {
    window.location.reload();
  }
}
