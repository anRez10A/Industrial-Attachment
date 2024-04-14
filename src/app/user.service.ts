import { Injectable } from '@angular/core';
import { User } from './User.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) {}
  
//this function returns observable type blog array
  
  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl);
  }

  addUser(User: User) {
    return this.httpClient.post(this.baseUrl, User);
  }

  deleteUser(id: string) {
    return this.httpClient.delete(this.baseUrl + '/' + id);
  }
}
