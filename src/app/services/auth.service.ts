import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'password') {
      const mockJwt = 'mock-jwt-token';
      sessionStorage.setItem('token', mockJwt);
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('token');
  }

  logout() {
    sessionStorage.removeItem('token');
  }

}
