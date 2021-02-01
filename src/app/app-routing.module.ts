import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent as HomepageComponent } from './main/home/home.component';
import { HomeComponent as AdminComponent } from './admin/home/home.component';
import { DashboardComponent as UserComponent } from './user/dashboard/dashboard.component';
import { LoginComponent } from './main/login/login.component';
import { RegisterComponent } from './main/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ManageOrdersComponent } from './user/manage-orders/manage-orders.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ManageusersComponent } from './admin/manageusers/manageusers.component';
import { LayoutComponent } from './main/layout/layout.component';
import { CustomiseProductComponent } from './main/customise-product/customise-product.component';
import { CheckoutComponent } from './user/checkout/checkout.component';
import { ListMerchandiseComponent } from './list-merchandise/list-merchandise.component';
import { ResetPasswordComponent } from './main/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  {
    path: 'app', component: LayoutComponent, children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'resetpass', component: ResetPasswordComponent },
      { path: 'customize/:merch', component: CustomiseProductComponent },
      { path: 'listmerch', component: ListMerchandiseComponent },
      { path: 'checkout', component: CheckoutComponent },

    ]
  },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'manageuser', component: ManageusersComponent },
    ]
  },
  {
    path: 'user', component: UserComponent, children: [
      { path: '', component: ProfileComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'manageorder', component: ManageOrdersComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
