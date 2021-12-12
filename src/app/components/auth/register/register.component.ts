import { RegisterForm } from './../../../model/auth/RegisterForm';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AppValidator } from 'src/app/validators/AppValidator';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  usernameAlreadyExists: boolean;
  emailAlreadyExists: boolean;

  teams: any[];

  registerForm:FormGroup;
  username:FormControl;
  password:FormControl;
  passwordConfirmation:FormControl;
  country:FormControl;
  city:FormControl;
  fovoriteTeam:FormControl;
  email:FormControl;
  info:FormControl;

  constructor(private authService: AuthService, private router: Router) {

    this.teams = [ 
      {
        name:'None',
        id:0
      },
    {
      name:'Legia Warsaw',
      id:1
    },
    {
      name:'Lech Poznan',
      id:2
    },
    {
      name:'Wisla Cracow',
      id:3
    },
    {
      name:'Pogon Szczecin',
      id:4
    },

    ]


    this.username = new FormControl('',[Validators.required, Validators.nullValidator,Validators.minLength(5),Validators.maxLength(30),AppValidator.nameValidator]);
    this.password = new FormControl('',[Validators.required, Validators.minLength(8),Validators.maxLength(30)]);
    this.passwordConfirmation = new FormControl('',[Validators.required, Validators.minLength(8),Validators.maxLength(30), AppValidator.passwordValidator]);
    this.country = new FormControl('',[Validators.minLength(3),Validators.maxLength(30)]);
    this.city = new FormControl('',[Validators.minLength(3),Validators.maxLength(30)]);
    this.fovoriteTeam = new FormControl('',[Validators.required]);
    this.email = new FormControl('',[Validators.required,Validators.email]);
    this.info = new FormControl('',[Validators.maxLength(200)]);

    this.registerForm = new FormGroup({
      username:this.username,
      email:this.email,
      password:this.password,
      passwordConfirmation:this.passwordConfirmation,
      country:this.country,
      city:this.city,
      fovoriteTeam:this.fovoriteTeam,
      info:this.info
    },[AppValidator.passwordValidator])


    this.usernameAlreadyExists = false;
    this.emailAlreadyExists = false;
   }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
    }
  }

  onSubmit(): void {
    console.log('Register form :');
    console.log(this.registerForm.value);

    let registerPost =  new RegisterForm(this.registerForm.value.username,
      this.registerForm.value.email,
      this.registerForm.value.password,
      this.registerForm.value.passwordConfirmation,
      this.registerForm.value.country,
      this.registerForm.value.city,
      this.registerForm.value.info,
      this.registerForm.value.fovoriteTeam);
      

    this.authService.register(registerPost).subscribe(
      data => {
        console.log("DATA ", data)
        this.goToLoginPage()

      },
      err => {
        console.log('ERROR ',err.value)
      }
    )
  }

  goToLoginPage(): void {
    this.router.navigate(['/login']);
  }

}
