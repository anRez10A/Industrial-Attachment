import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';

export const routes: Routes = [
    // { path: "",component: HomeComponent},
    { path: "",redirectTo: "login",pathMatch: 'full'},
    { path: "login",component: LoginComponent},
    { path: "home",component: HomeComponent},
    { path: "signup",component: SignupComponent},
    { path: "addrecipe",component: AddRecipeComponent},
    { path: "search",component: RecipeSearchComponent},


];
