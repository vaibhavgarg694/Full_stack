import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DashboardComponent as userDashboardComponent } from './user/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent as AdminComponent } from './admin/home/home.component';
import { LoginComponent } from './main/login/login.component';
import { RegisterComponent } from './main/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ManageusersComponent } from './admin/manageusers/manageusers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbInputModule,
  NbButtonModule,
  NbCardModule,
  NbActionsModule,
  NbUserModule,
  NbIconModule,
  NbAccordionModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeComponent } from './main/home/home.component';
import { ProductComponent } from './product/product.component';
import { ManageOrdersComponent } from './user/manage-orders/manage-orders.component';
import { ChatComponent } from './user/chat/chat.component';
import { ListProductComponent } from './main/list-product/list-product.component';
import { ViewProductComponent } from './main/view-product/view-product.component';
import { CustomiseProductComponent } from './main/customise-product/customise-product.component';
import { CartComponent } from './user/cart/cart.component';
import { CheckoutComponent } from './user/checkout/checkout.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { OrderCompletionComponent } from './user/order-completion/order-completion.component';
import { LayoutComponent } from './main/layout/layout.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { ResetPasswordComponent } from './main/reset-password/reset-password.component';
import { ListMerchandiseComponent } from './list-merchandise/list-merchandise.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ManageusersComponent,
    HomeComponent,
    ProductComponent,
    ManageOrdersComponent,
    AdminComponent,
    ChatComponent,
    ListProductComponent,
    ViewProductComponent,
    CustomiseProductComponent,
    CartComponent,
    CheckoutComponent,
    OrderCompletionComponent,
    LayoutComponent,
    userDashboardComponent,
    ListMerchandiseComponent,
    ResetPasswordComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    SweetAlert2Module.forRoot(),
    HttpClientModule,
    NbButtonModule,
    MatSliderModule,
    NbInputModule, MatFormFieldModule, MatInputModule, MatCardModule,
    MatButtonModule, MatProgressBarModule, FormsModule, ReactiveFormsModule,
    NbCardModule, NbActionsModule, NbUserModule, NbIconModule, MatIconModule,
    NbAccordionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
