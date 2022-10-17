import axios, { AxiosResponse } from 'axios';
interface UserProps {
  //Quetion mark to make theme optional so they can be modify seperatly
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  //When we dont know the annotetion of type we can give
  // [key:string] so we only know that it will be string
  events: { [key: string]: Callback[] } = {};
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }
  set(update: UserProps): void {
    // this.data.name = update.name;
    // this.data.age = update.age;
    //OR with build in function that resive two value and asign one to anothere
    Object.assign(this.data, update);
  }
  on(eventName: string, callBack: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callBack);
    this.events[eventName] = handlers;
  }
  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  }

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get('id');
    if (id) {
      //put request(update user that exist)
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      //post request(creating new user)
      axios.post('http://localhost:3000/users', this.data);
    }
  }
}
