import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Component({
	selector: 'app-addpost',
	templateUrl: './addpost.component.html',
	styleUrls: ['./addpost.component.css']
})
let api_url = "xyz";
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

				this.http.post<Hero>(this.api_url, this.addPost.value, httpOptions)
				.pipe(
				catchError(this.handleError('addHero', hero))
				);
			}
}
