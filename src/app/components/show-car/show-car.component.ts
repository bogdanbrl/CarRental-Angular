import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CarService} from '../../services/car.service';

@Component({
  selector: 'app-show-car',
  templateUrl: './show-car.component.html',
  styleUrls: ['./show-car.component.css']
})
export class ShowCarComponent implements OnInit {

  car: any;
  carOptions: any;
  constructor(private activatedRoute: ActivatedRoute,
              private carService: CarService,
              private router: Router) { }

  ngOnInit() {
    const carId = this.activatedRoute.snapshot.params['carId'];
    this.carService.getById(carId).subscribe(car => {
      this.car = car;
      this.carOptions = car.carOptions;
    });
  }

  goToRentCarPage(id) {

  }

  goAddCarImagePage(id) {

  }

}
