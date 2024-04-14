import {FormControl, Validators, FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormBuilder,FormGroup,ReactiveFormsModule, } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../user.service';
import { User } from '../User.interface';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, MatIconModule,MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,RouterLink,RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})


export class SignupComponent implements OnInit {

  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  userForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}
ngOnInit(): void {
  this.initForm();
}
  

  addUser() {
    console.log(this.userForm.value);
    this.userService.addUser(this.userForm.value as User).subscribe((res) => {
      this.router.navigateByUrl('/login');
    });
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      userName: '',
      email: '',
      password: ''
    });
    
  }

  navigeteTo(path:string){
    this.router.navigateByUrl(path);
  }
}


