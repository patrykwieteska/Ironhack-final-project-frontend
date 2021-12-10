import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor() {
    this.username= new FormControl('',[Validators.required, Validators.nullValidator]) 
    this.password= new FormControl('',[Validators.required, Validators.nullValidator, Validators.minLength(8), Validators.maxLength(30)]) 


    this.loginForm = new FormGroup({
      username:this.username,
      password:this.password
    });
  }


  ngOnInit(): void {
  }


  onSubmit(): void {
  }
}
