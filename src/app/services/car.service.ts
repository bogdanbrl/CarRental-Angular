import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { FilterCriteria } from '../models/filter-criteria';
import {environment} from '../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Acces-Control-Allow-Origin': '/*' })
};

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) {
  }

  getCars(filterCriteria: FilterCriteria): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/car/get`, filterCriteria);
  }

  getCarBodies(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/car/bodies`);
  }

  getCarClasses(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/car/classes`);
  }

  getCarEngines(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/car/engines`);
  }

  public getById(carId: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/car/details/${carId}`);
  }

  public searchCars(params: HttpParams): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/car/search`, {params});
  }

  public add(car): Observable<any> {
    return this.http.post(`${environment.apiUrl}/car/add`, car, httpOptions);
  }

  public editCar(car): Observable<any> {
    console.log(car.id);
    return this.http.put(`${environment.apiUrl}/car/edit`, car, httpOptions);
  }

  public hideCar(car) {
    return this.http.delete(`${environment.apiUrl}/car/delete/${car.id}`);
  }
}
