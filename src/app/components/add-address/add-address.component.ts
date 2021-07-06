import {Component, OnInit} from '@angular/core';
import {Address} from '../../models/address';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  address: Address = new Address();

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
  }

  addAddress() {
    this.userService.addAddress(this.address).subscribe((response: any) => {
        console.log(response);
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
    window.location.reload();
  }
}
