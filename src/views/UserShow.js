var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { View } from "./View";
// helper class which displays basic information about a user
var UserShow = /** @class */ (function (_super) {
    __extends(UserShow, _super);
    function UserShow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.template = function () {
            var div = document.createElement("div");
            div.className = "user-details-container";
            var h3 = document.createElement("h3");
            h3.textContent = "User Details:";
            var username = document.createElement("div");
            username.innerText = "Username: ".concat(_this.model.get("name"));
            var age = document.createElement("div");
            age.innerText = "Age: ".concat(_this.model.get("age"));
            div.appendChild(h3);
            div.appendChild(username);
            div.appendChild(age);
            return div;
        };
        return _this;
    }
    return UserShow;
}(View));
export { UserShow };
