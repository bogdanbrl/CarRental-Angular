import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/user/get`);
  }

  public getById(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/user/getById/${id}`);
  }

  public getByPrincipalName(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/user/principal`);
  }

  public getUserHistory(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/user/historyById/${id}`);
  }

  public getPrincipalUserHistory(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/user/history`);
  }

  public getUserDetails(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/user/details`);
  }

  public editAddress(address): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/address/edit`, address);
  }

  public deleteAddress(addressId): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/address/delete/${addressId}`);
  }

  public addAddress(address): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/address/add`, address);
  }

  public editUser(user): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/user/edit`, user);
  }

  public getAddressByID(addressId): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/address/delete/${addressId}`);
  }
}
