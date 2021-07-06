import {Component, OnInit} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {RentService} from '../../services/rent.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-show-rents',
  templateUrl: './show-rents.component.html',
  styleUrls: ['./show-rents.component.css']
})
export class ShowRentsComponent implements OnInit {

  rents: any;

  startPeriod: Date = null;
  endPeriod: Date = null;

  constructor(private rentService: RentService,
              private router: Router) {
  }

  ngOnInit() {
    this.rentService.getRents().subscribe(rents => {
      this.rents = rents;
    });
  }

  goToCarViewPage(carId: number) {
    this.router.navigateByUrl('/car/' + carId);
  }

  goToUserViewPage(userId: number) {
    this.router.navigateByUrl('user/' + userId);
  }

  getRentByPeriod(): void {
    let params = new HttpParams();
    if (this.startPeriod != null && this.endPeriod != null) {
      params = params.append('startPeriod', this.startPeriod.toString());
      params = params.append('endPeriod', this.endPeriod.toString());

      this.rentService.getRentsByPeriod(params).subscribe((rents) => {
          this.rents = rents;
        },
        (error) => {
          console.log('error');
          console.log(error);
        });
    }
  }

  getTodayRents() {
    this.rentService.getTodayRents().subscribe((rents) => {
        this.rents = rents;
      },
      (error) => {
        console.log('error');
        console.log(error);
      });
  }

}
