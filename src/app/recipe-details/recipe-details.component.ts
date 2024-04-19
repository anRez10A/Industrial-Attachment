import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.interface';
import {Router, RouterLink,RouterModule } from '@angular/router';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import { CommonModule } from '@angular/common';



@Component({
 selector: 'app-recipe-details',
 standalone: true,
  imports: [RecipeListComponent , MatButtonModule , MatIconModule, CommonModule, MatInputModule , MatFormFieldModule , FormsModule , RouterModule,  RouterLink, ],
 templateUrl: './recipe-details.component.html',
 styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
 recipe: Recipe = {};
 recipes: any;
   _id= '';

 constructor(private route: ActivatedRoute, private recipeService: RecipeService,private router: Router) { }
 ngOnInit(): void {


  this._id = this.route.snapshot.params['_id'];
  console.log(this._id); 
  this.recipeDetails();
}

 recipeDetails() {

  this.recipeService.getAllRecipe().subscribe((res) => {
    console.log(res);
    this.recipes = res;
  
    let index = this.recipes.findIndex(
      (recipe: { _id: string }) => recipe._id == this._id
    );
     console.log(index); 
  
    if (index > -1) {
      this.recipe = this.recipes[index];
    }

    console.log(this.recipe);

  });
}

logout(){
  localStorage.removeItem("token");
  localStorage.removeItem("name");

  this.router.navigateByUrl('/login');
}

// recipeDetails() {
//   this.recipeService.getAllRecipe().subscribe((res) => {
//     console.log(res);
//      this.recipes = res;
//      let index = this.recipes.findIndex(
//        (recipe: { _id: string }) => recipe._id == this._id
//      );
//      console.log(index); 
//      if (index > -1) {
//        this.recipe = this.recipes[index];
//      }
//   });
//  }
}
