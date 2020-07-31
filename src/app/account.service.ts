import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  getSbiAccounts(): Observable<any>{
    return this.http.get("/api/sa");
  }

  getHdfcAccout(): Observable<any>{
    return this.http.get("/api/ha");
  }
}
