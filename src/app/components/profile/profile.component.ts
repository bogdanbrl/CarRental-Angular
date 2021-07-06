import {Component, OnInit} from '@angular/core';

import {TokenStorageService} from '../../auth/_services/token-storage.service';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  userDerails: any;

  constructor(private token: TokenStorageService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.getUserDetails();
  }

  getUserDetails() {
    this.userService.getUserDetails().subscribe((data) => {
        this.userDerails = data;
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
  }

  goToEditAddressPage(id) {
    this.router.navigateByUrl('address/edit/' + id);
  }

  deleteAddress(addressId) {
    this.userService.deleteAddress(addressId).subscribe((response: any) => {
        console.log(response);
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
    window.location.reload();
  }

  goToEditUserPage() {
    this.router.navigateByUrl('user/edit');
  }

  goToAddAddressPage() {
    this.router.navigateByUrl('address/add');
  }

  goToPrincipalHistoryPage() {
    this.router.navigateByUrl('history/user');
  }
}
