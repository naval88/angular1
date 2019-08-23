import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class ApiuserService {

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, user);
  }

}
