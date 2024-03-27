import { User } from "../models/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {}

  // returns an object of callbacks
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
    };
  }

  onButtonClick(): void {
    console.log("Hi There.");
  }

  template(): HTMLElement {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.textContent = "User Form";
    const username = document.createElement("div");
    username.innerText = `Username: ${this.model.get("name")}`;
    const input = document.createElement("input");
    div.appendChild(h1);
    div.appendChild(username);
    div.appendChild(input);
    return div;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    const templateElement = this.template();

    // create a temporary div to hold the template
    const tempDiv = document.createElement("div");
    tempDiv.appendChild(templateElement);

    // extract the DocumentFragment from the temporary div
    const fragment = document.createDocumentFragment();
    while (tempDiv.firstChild) {
      fragment.appendChild(tempDiv.firstChild);
    }

    // bind events to elements in the fragment
    this.bindEvents(fragment);

    // append the fragment to the parent element
    this.parent.appendChild(fragment);
  }
}
