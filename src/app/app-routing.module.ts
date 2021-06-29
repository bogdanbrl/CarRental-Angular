import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import {ShowUsersComponent} from './components/show-users/show-users.component';
import {ShowUserComponent} from './components/show-user/show-user.component';
import {HistoryUserComponent} from './components/history-user/history-user.component';
import {ShowCarComponent} from './components/show-car/show-car.component';
import {ShowRentsComponent} from './components/show-rents/show-rents.component';
import {AddCarComponent} from './components/add-car/add-car.component';
import {EditCarComponent} from './components/edit-car/edit-car.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'users', component: ShowUsersComponent},
  { path: 'user/:userId', component: ShowUserComponent},
  { path: 'history/user/:userId', component: HistoryUserComponent},
  { path: 'car/:carId', component: ShowCarComponent},
  { path: 'rents', component: ShowRentsComponent},
  { path: 'add', component: AddCarComponent},
  { path: 'edit', component: EditCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
