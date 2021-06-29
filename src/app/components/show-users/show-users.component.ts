import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  users: any;
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  goToViewUserPage(id) {
    this.router.navigateByUrl('/user/' + id);
  }

  goToUserHistoryPage(id) {
    this.router.navigateByUrl('/history/user/' + id);
  }

}
