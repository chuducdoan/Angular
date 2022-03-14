import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({username, password}: any) {
    this.http.get<any>("http://localhost:3000/account").subscribe(res => {
      const user = res.find((a: any) => {
        return a.username === username && a.password === password;
      });
      if(user) {
        this.setToken('abcdefghiklmnopqrt');
        this.router.navigate(['admin']);
        // return of({name: 'Doan Chu'});
      } else {
        alert('dang nhap that bai!');
      }
      // return throwError(new Error('Failed to login'));
    })

  }

}
