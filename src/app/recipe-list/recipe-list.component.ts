import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.interface';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RecipeService } from '../recipe.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {Router, RouterModule} from '@angular/router';


@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [DatePipe, MatButtonModule, MatIconModule, MatSnackBarModule , MatCardModule , RouterModule],

  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})

export class RecipeListComponent {
    @Input()
    recipe!: Recipe;
  
    @Output()
    recipeDeleted: EventEmitter<string> = new EventEmitter();

    constructor(
        private recipeService: RecipeService,
        private snackBar: MatSnackBar,
        private router: Router
      ) {}


    

       deleteRecipe() {
        
        this.recipeService.deleteRecipe(this.recipe._id || '').subscribe({
           next: () => {
             this.recipeDeleted.emit(this.recipe._id);
           },
           error: (err) => {
             this.snackBar.open('Something is wrong');
             console.log(err);
           },
        });
       }
      
       recipeDetails(_id: string | any) {
        console.log(_id)
        this.router.navigate(['recipes', _id]);
      }

}