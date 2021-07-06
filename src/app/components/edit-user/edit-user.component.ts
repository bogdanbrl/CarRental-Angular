import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: any = {};
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.userService.getByPrincipalName().subscribe( user => {
      this.user = user;
    });
  }

  onSubmit() {
    console.log(this.user);
    this.userService.editUser(this.user).subscribe( () => {

    });
    this.router.navigateByUrl('profile');
  }
}
