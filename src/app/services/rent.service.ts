import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  constructor(private http: HttpClient) { }

  public getRents(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/rent/rents`);
  }

  public getRentsByPeriod(params: HttpParams): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/rent/getByPeriod`,{params: params});
  }

  public getTodayRents(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/rent/current`);
  }

  public getCarRents(carId) {
    return this.http.get<any>(`${environment.apiUrl}/car/history/${carId}`);
  }

  public rentCar(params: HttpParams) {
    return this.http.post<any>(`${environment.apiUrl}/rent/car`, {}, {params: params});
  }
}
