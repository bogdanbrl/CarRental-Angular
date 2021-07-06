import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-principal-history',
  templateUrl: './principal-history.component.html',
  styleUrls: ['./principal-history.component.css']
})
export class PrincipalHistoryComponent implements OnInit {

  rents: any;
  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.userService.getPrincipalUserHistory().subscribe(rents => {
      this.rents = rents;
      console.log(rents);
    });
  }

}
