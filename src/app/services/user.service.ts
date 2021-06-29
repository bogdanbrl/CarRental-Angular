import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/users');
  }

  public getById(id: number): Observable<any> {
    return this.http.get<any>('http://localhost:8080/user/' + id);
  }

  public getByPrincipalName(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/user/');
  }

  public getUserHistory(id: number): Observable<any> {
    return this.http.get<any>('http://localhost:8080/history/user/' + id);
  }

  public getPrincipalUserHistory(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/history/user/');
  }

  public getUserDetails(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/userDetails/');
  }

  public editAddress(address): Observable<any> {
    return this.http.put<any>('http://localhost:8080/address', address);
  }

  public deleteAddress(address): Observable<any> {
    return this.http.post<any>('http://localhost:8080/deleteAddress', address);
  }

  public addAddress(address): Observable<any> {
    return this.http.post<any>('http://localhost:8080/address', address);
  }

  public editUser(user): Observable<any> {
    return this.http.put<any>('http://localhost:8080/address', user);
  }
}
