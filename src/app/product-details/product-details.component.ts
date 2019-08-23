import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
  	 private route: ActivatedRoute,
  	) { }

  ngOnInit() {
  	this.route.paramMap.subscribe(params => {	
  		console.log(params.get('employeeId'));
 		  this.product = products[+params.get('employeeId')];
  });
  }

}
