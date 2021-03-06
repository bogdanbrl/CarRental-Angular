import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FilterCriteria} from '../../models/filter-criteria';
import {CarService} from '../../services/car.service';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filterCriteria: FilterCriteria = new FilterCriteria();
  searchValue: any;
  cars: any;
  carBodies: any;
  carClasses: any;
  carEngines: any;

  constructor(private carService: CarService,
              private router: Router) {
  }

  ngOnInit() {
    this.filterCars();
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

  filterCars(): any {
    this.carService.getCars(this.filterCriteria).subscribe((data) => {
        this.cars = data;
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
    this.resetValues();
  }

  resetValues(): void {
    this.filterCriteria = new FilterCriteria();
    this.cars = null;
  }

  searchCars() {
    let params = new HttpParams();
    params = params.append('searchValue', this.searchValue);

    this.carService.searchCars(params).subscribe((cars) => {
        this.cars = cars;
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
    this.searchValue = null;
  }

  goToCarViewPage(id) {
    this.router.navigateByUrl('/car/' + id);
  }
}
