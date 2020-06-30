import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
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

  constructor(private HttpClient: HttpClient) { }

  register(user: User): Observable<User> {
    return this.HttpClient.post<User>(this.API_URL + '/users/register', user);
  }

  login(credentials: Credentials): Observable<Login> {
    return this.HttpClient.post<Login>(this.API_URL + '/users/register', credentials);
  }

}
