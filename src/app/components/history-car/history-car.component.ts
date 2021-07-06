import { Component, OnInit } from '@angular/core';
import {RentService} from '../../services/rent.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-history-car',
  templateUrl: './history-car.component.html',
  styleUrls: ['./history-car.component.css']
})
export class HistoryCarComponent implements OnInit {

  rents: any;
  constructor(private rentService: RentService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const carId = this.activatedRoute.snapshot.params['carId'];
    this.rentService.getCarRents(carId).subscribe(rents => {
      this.rents = rents;
      console.log(rents);
    });
  }

  goToCarViewPage(carId: number) {
    this.router.navigateByUrl('/car/' + carId);
  }

  goToUserViewPage(userId: number) {
    this.router.navigateByUrl('user/' + userId);
  }
}
