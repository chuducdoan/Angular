import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  url: string = "http://localhost:3000/wallet";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(this.url);
  }
}
