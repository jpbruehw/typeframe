var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
import { View } from "./View.js";
import { UserForm } from "./UserForm.js";
import { UserShow } from "./UserShow.js";
/** class that that takes user information
 *  and renders a simple form as well as
 *  some basic information about the user
 *  shows how the regionsMap and onRender
 *  functionality can be used to dynamically
 *  render components
 */
var UserEdit = /** @class */ (function (_super) {
  __extends(UserEdit, _super);
  function UserEdit() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.template = function () {
      var divParent = document.createElement("div");
      var divChildOne = document.createElement("div");
      divChildOne.className = "user-show";
      var divChildTwo = document.createElement("div");
      divChildTwo.className = "user-form";
      divParent.appendChild(divChildOne);
      divParent.appendChild(divChildTwo);
      return divParent;
    };
    return _this;
  }
  UserEdit.prototype.regionsMap = function () {
    return {
      userShow: ".user-show",
      userForm: ".user-form",
    };
  };
  UserEdit.prototype.onRender = function () {
    var userShow = new UserShow(this.regions.userShow, this.model);
    userShow.render();
    var userForm = new UserForm(this.regions.userForm, this.model);
    userForm.render();
  };
  return UserEdit;
})(View);
export { UserEdit };
