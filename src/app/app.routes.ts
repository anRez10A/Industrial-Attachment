import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

export const routes: Routes = [
    { path: "",component: HomeComponent},
    { path: "login",component: LoginComponent},
    { path: "signup",component: SignupComponent},
    { path: "addrecipe",component: AddRecipeComponent},
];
