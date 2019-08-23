import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  
  employees = [ {'name':'naval','description':'Angular Developer', 'exp':7},
  				{'name':'pankag','description':'Php Developer','exp':4},

  				];

  constructor() { }

  ngOnInit() {

  }

  share() {
  	window.alert("Information has been shared");
  }

}
