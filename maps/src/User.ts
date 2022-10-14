import { faker } from '@faker-js/faker';

export class User{
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    // this.name = faker.faker.name.firstName();
    this.name = faker.name.firstName();
    this.location = {
      //parseFloat() is function in JS that take string and convert it to number with decimal
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
}