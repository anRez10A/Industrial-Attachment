import { Component, OnInit } from '@angular/core';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.interface';
import { take } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import {Router, RouterLink,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecipeListComponent , MatButtonModule , MatIconModule, CommonModule, MatInputModule , MatFormFieldModule , FormsModule , RouterModule,  RouterLink, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  allRecipes: Recipe[] = [];
  id!: string;
 userName: string | any;

  constructor(private RecipeService: RecipeService,private router: Router) {}
  ngOnInit() {
    this.RecipeService.getAllRecipe().pipe(take(1)).subscribe((res) => {
      this.allRecipes = res;
      this.userName = localStorage.getItem('name');
      // console.log(this.allRecipes);
    });
  }
  
  deleteRecipe(id: string) {
    this.allRecipes = this.allRecipes.filter((recipe) => recipe._id !== id);
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("name");

    this.router.navigateByUrl('/login');
  }

  
}