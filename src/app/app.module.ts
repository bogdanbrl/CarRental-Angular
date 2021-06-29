import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

import { authInterceptorProviders } from './auth/_helpers/auth.interceptor';
import { AddCarComponent } from './components/add-car/add-car.component';
import { EditCarComponent } from './components/edit-car/edit-car.component';
import { HistoryUserComponent } from './components/history-user/history-user.component';
import { ShowCarComponent } from './components/show-car/show-car.component';
import { ShowRentsComponent } from './components/show-rents/show-rents.component';
import { ShowUserComponent } from './components/show-user/show-user.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    AddCarComponent,
    EditCarComponent,
    HistoryUserComponent,
    ShowCarComponent,
    ShowRentsComponent,
    ShowUserComponent,
    ShowUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
