import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.interface';

@Component({
 selector: 'app-recipe-details',
 templateUrl: './recipe-details.component.html',
 styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
 recipe: Recipe = {};
 recipes: any;
  private _id: any;

 constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }
 ngOnInit(): void {


  this._id = this.route.snapshot.params['_id'];

  this.recipeDetails();
}

 recipeDetails() {

  this.recipeService.getAllRecipe().subscribe((res) => {
    this.recipes = res;
    let index = this.recipes.findIndex(
      (res: { _id: string }) => this.recipe._id == this._id
    );
    if (index > -1) {
      this.recipe = this.recipes[index];
    }
  });
}
}
