import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../../models/car';
import {CarService} from '../../services/car.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  car: any;
  carBodies: any;
  carClasses: any;
  carEngines: any;

  constructor(private carService: CarService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const carId = this.activatedRoute.snapshot.params['carId'];
    this.carService.getById(carId).subscribe((data) => {
        this.car = data;
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
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

  editCar() {
    this.carService.editCar(this.car).subscribe((response: any) => {
        console.log(response);
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
    this.router.navigateByUrl('');
  }
}
