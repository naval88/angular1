import { Component, OnInit } from '@angular/core';
import { products } from '../product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  
  products = products;

  constructor() { }

  ngOnInit() {

  }

  share() {
  	window.alert("Information has been shared");
  }

}
