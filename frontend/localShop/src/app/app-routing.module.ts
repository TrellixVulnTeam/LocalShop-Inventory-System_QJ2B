import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar-sidebar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ChartsComponent } from './routes/charts/charts.component';
import { FooterComponent } from './routes/footer/footer.component';
import { TablesComponent } from './routes/tables/tables.component';
import { SalesComponent } from './sales/sales.component';
import { ToggleComponent } from './toggle/toggle.component';
import { AddClerkComponent } from './add-clerk/add-clerk.component';
import { LoginComponent } from './login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { RegisterComponent } from './register/register.component';
import {ClerkComponent} from './clerk/clerk.component';


const routes: Routes = [
  { path: 'static', component: ToggleComponent, pathMatch: 'full' },
  { path: 'tables', component: TablesComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'addclerk', component: AddClerkComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: 'purchases', component: PurchaseComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'admin', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LandingpageComponent },
  { path: 'register', component: RegisterComponent },
  {path:'clerk', component: ClerkComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
