import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

import { User } from '../models/user.model';
import { Login } from '../interfaces/login';
import { Credentials } from '../interfaces/credentials'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL:string = environment.API_URL;
  private user: User;
  constructor(private HttpClient: HttpClient) { }

  register(user: User): Observable<User> {
    return this.HttpClient.post<User>(this.API_URL + '/users/signup', user);
  }

  login(credentials: Credentials): Observable<Login> {
    return this.HttpClient.post<Login>(this.API_URL + '/users/login', credentials);
  }

  setUser(user: User):void {
    this.user = user;
  }

  getUser(): User {
    return this.user;
  }

  logout(): void {
    this.HttpClient.get(this.API_URL + '/users/logout', {
      headers: {
        authorization: localStorage.getItem('authToken')
      }
    })
    .subscribe(console.log);
    this.setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
  }
}
