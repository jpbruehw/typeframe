"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEdit = void 0;
const View_1 = require("./View");
const UserForm_1 = require("./UserForm");
const UserShow_1 = require("./UserShow");
/** class that that takes user information
 *  and renders a simple form as well as
 *  some basic information about the user
 *  shows how the regionsMap and onRender
 *  functionality can be used to dynamically
 *  render components
 */
class UserEdit extends View_1.View {
    constructor() {
        super(...arguments);
        this.template = () => {
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
    regionsMap() {
        return {
            userShow: ".user-show",
            userForm: ".user-form",
        };
    }
    onRender() {
        const userShow = new UserShow_1.UserShow(this.regions.userShow, this.model);
        userShow.render();
        const userForm = new UserForm_1.UserForm(this.regions.userForm, this.model);
        userForm.render();
    }
}
exports.UserEdit = UserEdit;
