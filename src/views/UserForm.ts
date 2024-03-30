import { User } from "../models/User";
import { View } from "./View";
import { UserProps } from "../models/User";

export class UserForm extends View<User, UserProps> {
  // returns an object of callbacks
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-name": this.onSetNameClick,
      "click:.set-age": this.onSetAgeClick,
      "click:.save-model": this.onSaveClick,
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");

    // need to handle case where input could be null
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSaveClick = (): void => {
    this.model.save();
  };

  template(): HTMLElement {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.textContent = "User Details";
    const username = document.createElement("div");
    username.innerText = `Username: ${this.model.get("name")}`;
    const age = document.createElement("div");
    age.innerText = `Age: ${this.model.get("age")}`;
    const setRandomAge = document.createElement("button");
    setRandomAge.innerText = "Set Random Age";
    setRandomAge.className = "set-age";
    const nameInput = document.createElement("input");
    nameInput.placeholder = `${this.model.get("name")}`;
    const nameChange = document.createElement("button");
    nameChange.innerText = "Change Name";
    nameChange.className = "set-name";
    const saveUser = document.createElement("button");
    saveUser.className = "save-model";
    saveUser.innerText = "Save User";

    div.appendChild(h1);
    div.appendChild(username);
    div.appendChild(age);
    div.appendChild(nameInput);
    div.appendChild(setRandomAge);
    div.appendChild(nameChange);
    div.appendChild(saveUser);

    return div;
  }
}
