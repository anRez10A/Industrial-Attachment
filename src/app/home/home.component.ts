import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule,MatCardModule, MatButtonModule]
})

export class HomeComponent implements OnInit {


  popularRecipe: any;

  constructor(private http: HttpClient, private router: Router, private recipeService: RecipeService) { }

  

  goToRecipe(_id: string) {
    this.router.navigate(['recipe', _id]);
  }

  ngOnInit() {
    this.recipeService.getAllRecipe().subscribe((res: any) => {
      this.popularRecipe = res;
      console.log(this.popularRecipe);
    });
  }

}