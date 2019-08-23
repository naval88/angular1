import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddpostComponent } from './addpost/addpost.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
	{'path' : '', 'component':HomeComponent},
	{'path' : 'about-us', 'component':AboutusComponent},
	{'path' : 'add-post', 'component':AddpostComponent},
	{'path' : 'add-employee', 'component':AddEmployeeComponent},
	{'path' : 'list-employee', 'component':ListEmployeeComponent},
	{'path' : 'edit-employee', 'component':EditEmployeeComponent},
	{'path' : 'employee-details', 'component':EmployeeDetailsComponent},		
	{'path' : 'list-products', 'component':ListProductsComponent},	
	{'path' : 'product-details/:employeeId', 'component':ProductDetailsComponent},	
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
