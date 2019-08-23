import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ApiService} from "./api.service";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  addForm : FormGroup;
  constructor(private formBuilder: FormBuilder,
  				private router: Router, 
  				private apiService: ApiService) { }

  ngOnInit() {
  	this.addForm = this.fb.group({
      id: [],
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required]
    });
  }

  onSubmit(){
  	this.apiService.createUser(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['add-user']);
      });
  }

}
