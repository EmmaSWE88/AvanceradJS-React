import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from '../models/register-model';
import { LoginModel } from '../models/login-model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseUrl:string = 'http://localhost:9999/api/users'

  constructor(private http: HttpClient) { }

  registerUser(user: RegisterModel) {
    return this.http.post<any>(this.baseUrl, user)
  }

  loginUser(user: LoginModel) {
    return this.http.post<any>(this.baseUrl, user)
  }

}