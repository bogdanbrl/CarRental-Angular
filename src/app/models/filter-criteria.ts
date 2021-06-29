export class FilterCriteria {
  brand: string;
  model: string;
  year: string;
  rentPrice: string;
  carBody: string;
  carClass: string;
  engine: string;
  heatedSeats: string;
  navigation: string;
  startRent: string;
  endRent: string;

  constructor() {
    this.brand = '';
    this.model = '';
    this.year = '';
    this.rentPrice = '';
    this.heatedSeats = '';
    this.navigation = '';
    this.carBody = '';
    this.carClass = '';
    this.engine = '';
    this.startRent = '';
    this.endRent = '';
  }
}
