import {Component, OnInit} from '@angular/core';
import {RentService} from '../../services/rent.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpParams} from '@angular/common/http';
import {RentDetails} from '../../models/rentDetails';

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {

  rentDetails: RentDetails = new RentDetails();

  startPeriod: Date = null;
  endPeriod: Date = null;
  msgResponse: string = null;
  msgError: string = null;

  constructor(private rentService: RentService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  // rentCar() {
  //   const carId = this.activatedRoute.snapshot.params['carId'];
  //   console.log(carId);
  //   console.log(this.startPeriod);
  //   console.log(this.endPeriod);
  //
  //   let params = new HttpParams();
  //   if (this.startPeriod != null && this.endPeriod != null) {
  //     params = params.append('startPeriod', this.startPeriod.toString());
  //     params = params.append('endPeriod', this.endPeriod.toString());
  //     params = params.append('carID', carId);
  //
  //     this.rentService.rentCar(params).subscribe((msg) => {
  //       this.msgResponse = msg;
  //       console.log(msg);
  //     }, (error) => {
  //       console.log('error');
  //       console.log(error.error.text);
  //     });
  //   }
  // }


  rentCar() {
    this.msgResponse = null;
    this.msgError = null;

    const carId = this.activatedRoute.snapshot.params.carId;

    if (this.startPeriod != null && this.endPeriod != null) {
      this.rentDetails.startPeriod = this.startPeriod.toString();
      this.rentDetails.endPeriod = this.endPeriod.toString();
      this.rentDetails.carId = carId;
      console.log(this.rentDetails);
    }

    this.rentService.rentCar(this.rentDetails).subscribe((msg) => {
      this.msgResponse = msg;
      console.log(msg);
    }, (error) => {
      this.msgError = error.error;
      console.log('error');
      console.log(error.error);
    });

  }
}
