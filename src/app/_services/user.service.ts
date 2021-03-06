import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + '', {responseType: 'text'});
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'users', {responseType: 'text'});
  }

  getOperatorBoard(): Observable<any> {
    return this.http.get(API_URL + 'operators', {responseType: 'text'});
  }

  getAdminPage(): Observable<any> {
    return this.http.get(API_URL + 'admins', {responseType: 'json'});
  }

}
