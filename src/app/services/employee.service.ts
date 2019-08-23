import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Employee} from "../models/employee.model";
import {Observable} from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

	constructor(private http: HttpClient ) {}

	baseurl: string = "http://dummy.restapiexample.com/api/v1/";

  	getEmployees():Observables {
  		return this.http.get(this.baseurl+'employees');
  	}
}
