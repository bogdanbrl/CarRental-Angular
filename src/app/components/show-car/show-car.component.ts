import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CarService} from '../../services/car.service';
import {TokenStorageService} from '../../auth/_services/token-storage.service';

@Component({
  selector: 'app-show-car',
  templateUrl: './show-car.component.html',
  styleUrls: ['./show-car.component.css']
})
export class ShowCarComponent implements OnInit {

  car: any;
  carOptions: any;
  showEditAndHistoryBtn = false;

  constructor(private activatedRoute: ActivatedRoute,
              private carService: CarService,
              private router: Router,
              private tokenStorageService: TokenStorageService) {
    const user = this.tokenStorageService.getUser();
    if (user != null) {
      this.showEditAndHistoryBtn = user.roles.includes('ROLE_ADMIN');
    }
  }

  ngOnInit() {
    const carId = this.activatedRoute.snapshot.params['carId'];
    this.carService.getById(carId).subscribe(car => {
      this.car = car;
      this.carOptions = car.carOptions;
    });
  }

  goToRentCarPage(id) {
    const user = this.tokenStorageService.getUser();
    if (user != null) {
      this.router.navigateByUrl('rent/car/' + id);
    } else {
      this.router.navigateByUrl('login');
    }
  }

  goEditCarPage(id) {
    this.router.navigateByUrl('edit/' + id);
  }

  seeCarHistory(id) {
    this.router.navigateByUrl('history/car/' + id);
  }

  hideCar() {
    this.carService.hideCar(this.car).subscribe( () => {});
  }
}
