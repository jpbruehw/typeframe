import { View } from "./View";
import { User, UserProps } from "../models/User";

// helper class which displays basic information about a user
export class UserShow extends View<User, UserProps> {
  template = (): HTMLElement => {
    const div = document.createElement("div");
    div.className = "user-details-container";
    const h3 = document.createElement("h3");
    h3.textContent = "User Details:";
    const username = document.createElement("div");
    username.innerText = `Username: ${this.model.get("name")}`;
    const age = document.createElement("div");
    age.innerText = `Age: ${this.model.get("age")}`;

    div.appendChild(h3);
    div.appendChild(username);
    div.appendChild(age);

    return div;
  };
}
