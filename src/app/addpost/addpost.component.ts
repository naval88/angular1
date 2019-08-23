import { Component, OnInit, Injectable} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Component({
selector: 'app-addpost',
templateUrl: './addpost.component.html',
styleUrls: ['./addpost.component.css']
})

export class AddpostComponent implements OnInit {
addPost: FormGroup;
constructor(private fb: FormBuilder,private http: HttpClient) { }
ngOnInit() {
	this.addPost = this.fb.group({
		post_title:['Angular Js 7',Validators.required],
		post_content:['angular is frontend..',Validators.required],
	});

export class AddpostComponent implements OnInit {
		addPost: FormGroup;
		constructor(private fb: FormBuilder) { }
		ngOnInit() {
			this.addPost = this.fb.group({
				post_title:['Angular Js 7',Validators.required],
				post_content:['angular is frontend..',Validators.required],
			});
		}
	submitData() {
		//alert("hi");
		//console.warn(this.addPost.value);
	}
}
	
