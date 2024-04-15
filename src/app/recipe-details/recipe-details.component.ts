import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
 selector: 'app-recipe-details',
 templateUrl: './recipe-details.component.html',
 styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
 recipe: any;

 constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

ngOnInit(): void {
 const id = this.route.snapshot.paramMap.get('_id');
 if (id) { // Check if id is not null
    this.recipeService.getRecipeById(id).subscribe(data => {
      this.recipe = data;
    }, error => {
      console.error('Error fetching recipe:', error);
      // Handle the error, e.g., show an error message or redirect
    });
 } else {
    // Handle the case where id is null, e.g., show an error message or redirect
    console.error('Recipe ID is null');
    // You might want to redirect the user or show an error message here
 }
}
}
