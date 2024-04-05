import { Component,OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormBuilder,ReactiveFormsModule, } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.interface';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [ReactiveFormsModule, 
    JsonPipe,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatButtonModule,
    RouterModule,],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss'
})

export class AddRecipeComponent {
  categoriesOfRecipe= ['Desert', 'Spicy', 'Drinks' , 'FastFood'];
  title: any;
  recipeForm: any;
  
    constructor(
      private formBuilder: FormBuilder,
      private recipeService: RecipeService,
      private router: Router
    ) {}

    ngOnInit(): void {
      this.initForm();
    }


    addRecipe() {
      this.recipeService.addRecipe(this.recipeForm.value as Recipe).subscribe((res) => {
        this.router.navigateByUrl('/home');
      });
    }

    initForm(){
  this.recipeForm = this.formBuilder.group({
      recipeName: '',
      ingredents: '',
      description: '',
      category: '',
      status: '',
    });

  }

  
  
}
