import { Component, OnInit } from '@angular/core';
import {Address} from '../../models/address';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {

  address: Address = new Address();
  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const addressID = this.activatedRoute.snapshot.params['addressId'];
    this.userService.getAddressByID(addressID).subscribe(address => {
      this.address = address;
    });
  }

  onSubmit() {
    console.log(this.address);
    this.userService.editAddress(this.address).subscribe( () => {});
    this.router.navigateByUrl('profile');
  }
}
