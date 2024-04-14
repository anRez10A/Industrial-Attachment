import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { JsonPipe } from '@angular/common';
import { LoginService } from '../login.service';
import { Login,LoginResponce } from '../Login.interface';
import { Router, RouterModule, UrlSegment } from '@angular/router';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {merge} from 'rxjs';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatIconModule,MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})


export class LoginComponent {
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required,Validators.minLength(6)]);

  isFormValid = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar
  ){

  }

  loginResponce: LoginResponce = {};

  authUser(){
    console.log("thehhehsasaaa");
    const login: Login = {
      email: this.email.value!,
      password: this.password.value!,
  };
    this.loginService.authUser(login).subscribe(async (res) => {
      this.loginResponce = res;
      localStorage.setItem("token", this.loginResponce.token??'');
      if(this.loginResponce.success){
        this.router.navigateByUrl("/home");
      }
      else{
        this.snackBar.open('Invalide User-Name or Password','Got It' ,{
          duration: 3000
        });
      }
    });
  }

navigeteTo(path: string){
    this.router.navigateByUrl(path);
  }

}
