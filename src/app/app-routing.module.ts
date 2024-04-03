import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ModifyProductComponent } from './modify-product/modify-product.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'add', component: AddProductComponent },
  { path: 'modify/:id', component: ModifyProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
