type Callback = () => void;

export class Eventing {
  //When we dont know the annotetion of type we can give
  // [key:string] so we only know that it will be string
  events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callBack: Callback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callBack);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  };
}
