import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-employee-alert',
  templateUrl: './employee-alert.component.html',
  styleUrls: ['./employee-alert.component.css']
})
export class EmployeeAlertComponent implements OnInit {

	@Input() employee;
  constructor() { }

  ngOnInit() {
  }

  nofifyme()
  {
  	window.alert("Admin has been notify");
  }
}
