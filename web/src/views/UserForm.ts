import { User } from '../models/User';
export class UserForm {
  constructor(public parent: Element, public model: User) {}

  eventMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
    };
  }
  onSetAgeClick = (): void => {
    // console.log('button as clicked');
    this.model.setRandomAge();
  };

  templet(): string {
    return `
    <div>
      <h1>User Form</h1>
      <div>User name : ${this.model.get('name')}</div>
      <div>User age : ${this.model.get('age')}</div>
      <input />
      <button>Click ME</button>
      <button class="set-age">Set rendom Age</button>
    </div>
    `;
  }

  bindEvent(fragment: DocumentFragment): void {
    const eventMap = this.eventMap();
    for (let eventKey in eventMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventMap[eventKey]);
      });
    }
  }
  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.templet();

    this.bindEvent(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
