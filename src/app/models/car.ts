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
}
