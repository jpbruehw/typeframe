"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserShow = void 0;
const View_1 = require("./View");
// helper class which displays basic information about a user
class UserShow extends View_1.View {
    constructor() {
        super(...arguments);
        this.template = () => {
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
}
exports.UserShow = UserShow;
