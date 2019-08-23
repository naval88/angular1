import { Component, OnInit, Injectable} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()

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
}
submitData() {	
	let form_data = this.addPost.value;
	console.log(form_data.post_title);
		this.http.post("http://localhost/phpapi/", 
			{
"name":  "Customer004",
"email":  "customer004@email.com",
"tel":  "0000252525"
})
		.subscribe(
		data  => {
		console.log("POST Request is successful ", data);
		},
		error  => {
		console.log("Error", error);
		});
	}
}	
