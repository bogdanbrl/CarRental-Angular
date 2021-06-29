import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  user: any;
  addresses: any;
  addressPosition = 0;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const userId = this.activatedRoute.snapshot.params['userId'];
    this.userService.getById(userId).subscribe(user => {
      this.user = user;
      this.addresses = user.addresses;
    });
  }

  goToUserHistoryPage(userId: number) {
    this.router.navigateByUrl('history/user/' + userId);
  }

}
