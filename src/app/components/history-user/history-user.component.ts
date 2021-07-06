import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-history-user',
  templateUrl: './history-user.component.html',
  styleUrls: ['./history-user.component.css']
})
export class HistoryUserComponent implements OnInit {

  rents: any;
  user: any;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const userId = this.activatedRoute.snapshot.params['userId'];
    this.userService.getById(userId).subscribe((user) => {
        this.user = user;
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
    this.userService.getUserHistory(userId).subscribe((rents) => {
        this.rents = rents;
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
  }

  goToCarViewPage(id) {
    this.router.navigateByUrl('/car/' + id);
  }

}
