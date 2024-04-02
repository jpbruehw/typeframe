import { View } from "./View";
import { User, UserProps } from "../models/User";
import { UserForm } from "./UserForm";
import { UserShow } from "./UserShow";

export class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: ".user-show",
      userForm: ".user-form",
    };
  }

  onRender(): void {
    const userShow = new UserShow(this.regions.userShow, this.model);
    userShow.render();
    const userForm = new UserForm(this.regions.userForm, this.model);
    userForm.render();
  }

  template = (): HTMLElement => {
    const divParent = document.createElement("div");
    const divChildOne = document.createElement("div");
    divChildOne.className = "user-show";
    const divChildTwo = document.createElement("div");
    divChildTwo.className = "user-form";

    divParent.appendChild(divChildOne);
    divParent.appendChild(divChildTwo);

    return divParent;
  };
}
