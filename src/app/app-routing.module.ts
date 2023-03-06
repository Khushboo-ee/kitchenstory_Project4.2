import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegComponent } from './user-reg/user-reg.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'admin',component:AdminLoginComponent},
  {path:'user',component:UserLoginComponent},
  {path:'prodList',component:ProductListComponent},
  {path:'userReg',component:UserRegComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
