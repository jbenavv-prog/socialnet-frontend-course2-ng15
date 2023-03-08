import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  apiUrl: string = GlobalConstants.apiURL; // "http://localhost:3000/api/v1"

  signup(userObj: { fullName: string; email: string; password: string }) {
    return this.http.post<any>(`${this.apiUrl}/auth/signup`, userObj);
  }

  login(userObj: {email: string, password: string}){
    return this.http.post<any>(`${this.apiUrl}/auth/login`, userObj);
  }
}
