import { Component, OnInit } from '@angular/core';
import {CarService} from '../../services/car.service';
import {Router} from '@angular/router';
import {Car} from '../../models/car';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  form: any = {};
  isAddSuccessful = false;
  isAddFailed = false;
  errorMessage = '';




  car: Car = new Car();

  carBodies: any;
  carClasses: any;
  carEngines: any;

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit() {
    this.getCarBodies();
    this.getCarClasses();
    this.getCarEngines();
  }

  getCarBodies(): void {
    this.carService.getCarBodies().subscribe((data) => {
      this.carBodies = data;
    });
  }

  getCarClasses(): void {
    this.carService.getCarClasses().subscribe((data) => {
      this.carClasses = data;
    });
  }

  getCarEngines(): void {
    this.carService.getCarEngines().subscribe((data) => {
      this.carEngines = data;
    });
  }

  addCar(): void {
    console.log(this.car);
    this.carService.add(this.form).subscribe(() => {

    });
    // this.router.navigateByUrl('');
  }

}
