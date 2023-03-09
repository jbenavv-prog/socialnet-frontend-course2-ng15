import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from '../common/global-constants';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private router: Router
  ) {}
  apiUrl: string = GlobalConstants.apiURL; // "http://localhost:3000/api/v1"

  signup(userObj: { fullName: string; email: string; password: string }) {
    return this.http.post<any>(`${this.apiUrl}/auth/signup`, userObj);
  }

  login(userObj: { email: string; password: string }) {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, userObj);
  }

  logout() {
    this.tokenService.deleteToken();

    this.router.navigate(['login']);
  }
}
