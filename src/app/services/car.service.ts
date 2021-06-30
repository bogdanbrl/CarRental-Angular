import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { FilterCriteria } from '../models/filter-criteria';

const API_URL = 'http://localhost:8080/';

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
    return this.http.post<any>(API_URL + 'cars', filterCriteria);
  }

  getCarBodies(): Observable<any> {
    return this.http.get<any>(API_URL + 'carBodies');
  }

  getCarClasses(): Observable<any> {
    return this.http.get(API_URL + 'carClasses');
  }

  getCarEngines(): Observable<any> {
    return this.http.get(API_URL + 'engines');
  }

  public getById(carId: number): Observable<any> {
    return this.http.get<any>(API_URL + 'carDetails/' + carId);
  }

  public searchCars(params: HttpParams): Observable<any> {
    return this.http.get<any>(API_URL + 'searchCars/', {params});
  }

  public add(car): Observable<any> {
    return this.http.post(API_URL + 'car', car, httpOptions);
  }

  public editCar(car): Observable<any> {
    return this.http.post(API_URL + 'editCar', car, httpOptions);
  }

  public hideCar(car) {
    return this.http.post(API_URL + 'hide', car, httpOptions);
  }
}
