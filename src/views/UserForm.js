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
var UserForm = /** @class */ (function (_super) {
  __extends(UserForm, _super);
  function UserForm() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    /** function to allow the user to  */
    _this.onSetNameClick = function () {
      var input = _this.parent.querySelector("input");
      // need to handle case where input could be null
      if (input) {
        var name_1 = input.value;
        _this.model.set({ name: name_1 });
      }
    };
    /** function to set a random age
     *  for the displayed user
     *  uses the set method from the Model
     *  parent class
     */
    _this.onSetAgeClick = function () {
      var age = Math.round(Math.random() * 100);
      _this.model.set({ age: age });
      console.log(age);
    };
    _this.onSaveClick = function () {
      _this.model.save();
    };
    return _this;
  }
  // returns an object of callbacks
  UserForm.prototype.eventsMap = function () {
    return {
      "click:.set-name": this.onSetNameClick,
      "click:.set-age": this.onSetAgeClick,
      "click:.save-model": this.onSaveClick,
    };
  };
  UserForm.prototype.template = function () {
    var div = document.createElement("div");
    var h3 = document.createElement("h3");
    h3.textContent = "User Form";
    h3.textContent = "User Details:";
    h3.className = "form-header";
    var username = document.createElement("div");
    username.innerText = "Username: ".concat(this.model.get("name"));
    var age = document.createElement("div");
    age.innerText = "Age: ".concat(this.model.get("age"));
    var nameInput = document.createElement("input");
    nameInput.className = "name-input";
    nameInput.placeholder = "".concat(this.model.get("name"));
    // buttons
    var buttonDiv = document.createElement("div");
    buttonDiv.className = "button-div";
    var setRandomAge = document.createElement("button");
    setRandomAge.classList.add("set-age");
    setRandomAge.classList.add("user-form-button");
    var ageButtonSpan = document.createElement("span");
    ageButtonSpan.innerText = "Set Random Age";
    setRandomAge.appendChild(ageButtonSpan);
    var saveUser = document.createElement("button");
    saveUser.classList.add("save-model");
    saveUser.classList.add("user-form-button");
    var saveButtonSpan = document.createElement("span");
    saveButtonSpan.innerText = "Save User";
    saveUser.appendChild(saveButtonSpan);
    var nameChange = document.createElement("button");
    nameChange.classList.add("set-name");
    nameChange.classList.add("user-form-button");
    var nameButtonSpan = document.createElement("span");
    nameButtonSpan.innerText = "Change Name";
    nameChange.appendChild(nameButtonSpan);
    var nameChangeHeader = document.createElement("h5");
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
  };
  return UserForm;
})(View);
export { UserForm };
