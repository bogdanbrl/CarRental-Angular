import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  constructor(private http: HttpClient) { }

  public getRents(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/rents');
  }

  public getRentsByPeriod(params: HttpParams): Observable<any> {
    return this.http.get<any>('http://localhost:8080/rentsByPeriod',{params: params});
  }

  public getTodayRents(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/currentRents');
  }
}
