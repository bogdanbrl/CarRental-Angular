import {CarOptions} from './car-options';

export class Car {

  brand: string;
  model: string;
  year: number;
  rentPrice: number;
  carBody: string;
  carClass: string;
  engine: string;
  image: string;
  carOptions: CarOptions = new CarOptions();


  // constructor() {
  //   this.brand = '';
  //   this.model = '';
  //   this.year = 0;
  //   this.rentPrice = 0;
  //   this.carBody = '';
  //   this.carClass = '';
  //   this.engine = '';
  //   this.image = '';
  //   this.carOptions = new CarOptions();
  // }
}
