import { Component, OnInit } from '@angular/core';
import {RentService} from '../../services/rent.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {

  startPeriod: Date = null;
  endPeriod: Date = null;
  msgResponse: string = null;
  constructor(private rentService: RentService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  rentCar() {
    const carId = this.activatedRoute.snapshot.params['carId'];
    console.log(carId);
    console.log(this.startPeriod);
    console.log(this.endPeriod);

    let params = new HttpParams();
    if (this.startPeriod != null && this.endPeriod != null) {
      params = params.append('startPeriod', this.startPeriod.toString());
      params = params.append('endPeriod', this.endPeriod.toString());
      params = params.append('carID', carId);

      this.rentService.rentCar(params).subscribe((msg) => {
        this.msgResponse = msg;
        console.log(msg);
      }, (error) => {
        console.log('error');
        console.log(error.error.text);
      });
    }
  }
}
