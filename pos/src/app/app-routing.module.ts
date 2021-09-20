import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin/admin.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { ManageCategoryComponent } from './components/category/manage-category/manage-category.component';
import { UpdateCategoryComponent } from './components/category/update-category/update-category.component';
import { ViewCategoryComponent } from './components/category/view-category/view-category.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AddInventoryComponent } from './components/inventory/add-inventory/add-inventory.component';
import { ManageInventoryComponent } from './components/inventory/manage-inventory/manage-inventory.component';
import { ViewInventoryByDateComponent } from './components/inventory/view-inventory-by-date/view-inventory-by-date.component';
import { ViewInventoryByHighPriceComponent } from './components/inventory/view-inventory-by-high-price/view-inventory-by-high-price.component';
import { ViewInventoryByIdComponent } from './components/inventory/view-inventory-by-id/view-inventory-by-id.component';
import { ViewInventoryByLowPriceComponent } from './components/inventory/view-inventory-by-low-price/view-inventory-by-low-price.component';
import { ViewInventoryByPriceComponent } from './components/inventory/view-inventory-by-price/view-inventory-by-price.component';
import { ViewInventoryByProductNameComponent } from './components/inventory/view-inventory-by-product-name/view-inventory-by-product-name.component';
import { ViewInventoryByQuantityComponent } from './components/inventory/view-inventory-by-quantity/view-inventory-by-quantity.component';
import { ViewInventoryComponent } from './components/inventory/view-inventory/view-inventory.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { ManageProductComponent } from './components/product/manage-product/manage-product.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';
import { ViewProductComponent } from './components/product/view-product/view-product.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { CreateVendorComponent } from './components/vendor/create-vendor/create-vendor.component';
import { UpdateVendorComponent } from './components/vendor/update-vendor/update-vendor.component';
import { VendorDetailsComponent } from './components/vendor/vendor-details/vendor-details.component';
import { VendorListComponent } from './components/vendor/vendor-list/vendor-list.component';

const routes: Routes = [
  {path:"admin",component:AdminComponent},
  {path:"addCategory",component:AddCategoryComponent},
  {path:"viewCategory",component:ViewCategoryComponent},
  {path:"manageCategory",component:ManageCategoryComponent},
  {path:"updateCategory",component:UpdateCategoryComponent},
  {path:"addProduct",component:AddProductComponent},
  {path:"viewProduct",component:ViewProductComponent},
  {path:"addinventory",component:AddInventoryComponent},
  {path:"manageProduct",component:ManageProductComponent},
  {path:"updateProduct",component:UpdateProductComponent},
  {path:"viewinventory",component:ViewInventoryComponent},
  {path:"manageinventory",component:ManageInventoryComponent},
  {path:"viewinventorybyid",component:ViewInventoryByIdComponent},
  {path:"viewinventorybyname",component:ViewInventoryByProductNameComponent},
  {path:"viewinventorybylowprice",component:ViewInventoryByLowPriceComponent},
  {path:"viewinventorybyhighprice",component:ViewInventoryByHighPriceComponent},
  {path:"viewinventorybyquantity",component:ViewInventoryByQuantityComponent},
  {path:"viewbyprice",component:ViewInventoryByPriceComponent},
  {path:"viewbydate",component:ViewInventoryByDateComponent},
  { path: '', redirectTo: 'vendor', pathMatch: 'full' },
  { path: 'viewvendors', component: VendorListComponent },
  { path: 'addvendors', component: CreateVendorComponent },
  { path: 'update/:id', component: UpdateVendorComponent },
  { path: 'details/:id', component: VendorDetailsComponent },
  {path:'createEmployee',component:CreateEmployeeComponent},
  {path:'employeeList',component:EmployeeListComponent},
  {path:'updateEmployee',component:UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
