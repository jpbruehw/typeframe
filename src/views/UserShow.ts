import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserShow extends View<User, UserProps> {
  template = (): HTMLElement => {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.textContent = "User Details";
    const username = document.createElement("div");
    username.innerText = `Username: ${this.model.get("name")}`;
    const age = document.createElement("div");
    age.innerText = `Age: ${this.model.get("age")}`;

    div.appendChild(h1);
    div.appendChild(username);
    div.appendChild(age);

    return div;
  };
}
