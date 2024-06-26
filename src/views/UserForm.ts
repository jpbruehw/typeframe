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
  /** function to allow the user to  */
  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");

    // need to handle case where input could be null
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };
  /** function to set a random age
   *  for the displayed user
   *  uses the set method from the Model
   *  parent class
   */
  onSetAgeClick = (): void => {
    const age = Math.round(Math.random() * 100);
    this.model.set({ age });
    console.log(age);
  };

  onSaveClick = (): void => {
    this.model.save();
  };

  template(): HTMLElement {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.textContent = "User Form";
    h3.textContent = "User Details:";
    h3.className = "form-header";
    const username = document.createElement("div");
    username.innerText = `Username: ${this.model.get("name")}`;
    const age = document.createElement("div");
    age.innerText = `Age: ${this.model.get("age")}`;
    const nameInput = document.createElement("input");
    nameInput.className = "name-input";
    nameInput.placeholder = `${this.model.get("name")}`;

    // buttons
    const buttonDiv = document.createElement("div");
    buttonDiv.className = "button-div";

    const setRandomAge = document.createElement("button");
    setRandomAge.classList.add("set-age");
    setRandomAge.classList.add("user-form-button");
    const ageButtonSpan = document.createElement("span");
    ageButtonSpan.innerText = "Set Random Age";
    setRandomAge.appendChild(ageButtonSpan);

    const saveUser = document.createElement("button");
    saveUser.classList.add("save-model");
    saveUser.classList.add("user-form-button");
    const saveButtonSpan = document.createElement("span");
    saveButtonSpan.innerText = "Save User";
    saveUser.appendChild(saveButtonSpan);

    const nameChange = document.createElement("button");
    nameChange.classList.add("set-name");
    nameChange.classList.add("user-form-button");
    const nameButtonSpan = document.createElement("span");
    nameButtonSpan.innerText = "Change Name";
    nameChange.appendChild(nameButtonSpan);

    const nameChangeHeader = document.createElement("h5");
    nameChangeHeader.innerText = "Change Name";
    nameChangeHeader.className = "name-change-header";

    buttonDiv.appendChild(setRandomAge);
    buttonDiv.appendChild(nameChange);
    buttonDiv.appendChild(saveUser);

    div.appendChild(h3);
    div.appendChild(username);
    div.appendChild(age);
    div.appendChild(nameChangeHeader);
    div.appendChild(nameInput);
    div.appendChild(buttonDiv);

    return div;
  }
}
