import { Injectable } from '@angular/core';
import { Recipe } from './recipe.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {


  private baseUrl = 'http://localhost:3000/recipes';

  constructor(private httpClient: HttpClient) {}

  getAllRecipe(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(this.baseUrl,{ headers: new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem("token")}` })});
  }

  addRecipe(Recipe: Recipe) {
    return this.httpClient.post(this.baseUrl,Recipe,{ headers: new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem("token")}` })});
  }

  deleteRecipe(id: string) {
    return this.httpClient.delete(this.baseUrl + '/' + id,{ headers: new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem("token")}` })});
  }

  getRecipeById(id: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`,{ headers: new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem("token")}` })});
 }
  
}

