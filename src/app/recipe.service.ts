import { Injectable } from '@angular/core';
import { Recipe } from './recipe.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {


  private baseUrl = 'http://localhost:3000/Recipe';

  constructor(private httpClient: HttpClient) {}

  getAllRecipe(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(this.baseUrl);
  }

  addRecipe(payload: Recipe) {
    return this.httpClient.post(this.baseUrl, { ...payload, Status: 'Updated' });
  }

  deleteRecipe(id: string) {
    return this.httpClient.delete(this.baseUrl + '/' + id);
  }

  
}