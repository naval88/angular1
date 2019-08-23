import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {Observable} from "rxjs/index";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { AddpostComponent } from './addpost/addpost.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { EmployeeAlertComponent } from './employee-alert/employee-alert.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    HomeComponent,
    AddpostComponent,
    AddEmployeeComponent,
    ListEmployeeComponent,
    EditEmployeeComponent,
    ListProductsComponent,
    EmployeeAlertComponent,
    EmployeeDetailsComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
