import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../../auth/_services/token-storage.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  userDerails: any;

  constructor(private token: TokenStorageService,
              private userService: UserService) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.getUserDetails();
  }

  getUserDetails() {
    this.userService.getUserDetails().subscribe(data => {
      this.userDerails = data;
      console.log(data);
    });
  }

  editAddressPage(id) {

  }

  deleteAddress(address) {
    this.userService.deleteAddress(address).subscribe(() => {});
  }

  editUser() {

  }

  addAddress() {

  }
}