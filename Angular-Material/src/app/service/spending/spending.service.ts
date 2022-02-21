import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpendingService {

  url: string = "http://localhost:3000/spending";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(this.url);
  }

  createSpending(data: any) {
    return this.http.post<any>(this.url, data);
  }

  updateSpending(id: number, data: any) {
    return this.http.put<any>(this.url + "/" + id, data);
  }

  deleteSpending(id: number) {
    return this.http.delete<any>(this.url + "/" + id);
  }
}
