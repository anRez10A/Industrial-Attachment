import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { GuardService } from './guard.service';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component'; 


export const routes: Routes = [
    // { path: "",component: HomeComponent},
    { path: "",redirectTo: "login",pathMatch: 'full'},
    { path: "login",component: LoginComponent},
    { path: "home",component: HomeComponent, canActivate: [GuardService]},
    { path: "signup",component: SignupComponent},
    { path: "addrecipe",component: AddRecipeComponent,canActivate: [GuardService]},
    { path: "search",component: RecipeSearchComponent,canActivate: [GuardService]},
    { path: "recipelist",component: RecipeListComponent,canActivate: [GuardService]},
    { path: 'recipes/:_id', component: RecipeDetailsComponent,canActivate: [GuardService]},

];
