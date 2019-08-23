import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Employee} from "../models/employee.model";
import {EmployeeService} from "../services/employee.service";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css'],
  
})
export class ListEmployeeComponent implements OnInit {

	employes: Employee[];

  	constructor(private employeeService: EmployeeService) { }

  	ngOnInit() {
  		this.employeeService.getEmployees()
  		.subscribe(data => {
  			this.employes = data;
  		});
  	}
}
