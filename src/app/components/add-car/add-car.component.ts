import {Component, OnInit} from '@angular/core';
import {CarService} from '../../services/car.service';
import {Router} from '@angular/router';
import {Car} from '../../models/car';
import {CarOptions} from '../../models/car-options';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  car: Car = new Car();
  carOptions: CarOptions = new CarOptions();

  carBodies: any;
  carClasses: any;
  carEngines: any;

  constructor(private carService: CarService, private router: Router) {
  }

  ngOnInit() {
    this.getCarBodies();
    this.getCarClasses();
    this.getCarEngines();
  }

  getCarBodies(): void {
    this.carService.getCarBodies().subscribe((data) => {
        this.carBodies = data;
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
  }

  getCarClasses(): void {
    this.carService.getCarClasses().subscribe((data) => {
        this.carClasses = data;
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
  }

  getCarEngines(): void {
    this.carService.getCarEngines().subscribe((data) => {
        this.carEngines = data;
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
  }

  addCar(): void {
    this.car.carOptions = this.carOptions;
    this.carService.add(this.car).subscribe((response: any) => {
        console.log(response);
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
    this.router.navigateByUrl('');
  }

}
