import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  url: string = "http://localhost:3000/account";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(this.url);
  }

  createAccount(data: any) {
    return this.http.post<any>(this.url, data);
  }

  updateAccount(id: number, data: any) {
    return this.http.put<any>(this.url + "/" + id, data);
  }

  deleteAccount(id: number) {
    return this.http.delete<any>(this.url + "/" +  id);
  }
}
