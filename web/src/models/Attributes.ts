import { UserProps } from './User';

export class Attributes<T> {
  constructor(private data: T) {}

  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }
  set(update: T): void {
    // this.data.name = update.name;
    // this.data.age = update.age;
    //OR with build in function that resive two value and asign one to anothere
    Object.assign({ data: this.data }, update);
  }
}
