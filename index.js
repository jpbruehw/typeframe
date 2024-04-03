import { UserList } from "./src/views/UserList";
import { Collection } from "./src/models/Collection";
import { User } from "./src/models/User";
import { UserForm } from "./src/views/UserForm";
// ensures dom is loaded before running any code
document.addEventListener("DOMContentLoaded", function () {
  /** link to db.json file on github rep
   *  in a development environment, use
   *  localhost link
   */
  // link for demo
  var jsonDbLink =
    "https://my-json-server.typicode.com/jpbruehw/typescript-web-framework/blob/main/users";
  // link for local development
  // const jsonDbLink = 'https://localhost:3000/users'
  /** user form demo
   *  --------------
   *  we will create a new user by passing in
   *  an object of details which will demonstrate
   *  the user will be passed into the UserForm
   *  NOTE: full functionality of the UserForm works
   *  best with an actual db or localhost on desktop
   */
  // create a user object
  var userData = {
    id: 4,
    name: "Alex",
    age: 25,
  };
  /** get the parent element to pass in the form into
   *  query element from dom and then pass it in
   *  along with the user instance we create
   *  with the userData object
   */
  // create user instance by calling static buildUser method
  var userFormUser = User.buildUser(userData, jsonDbLink);
  // query form div
  var formDiv = document.getElementById("single-user-demo");
  /** UserForm takes arguments for the parent
   *  element and the User instance we
   *  just created
   */
  if (formDiv) {
    var userForm = new UserForm(formDiv, userFormUser);
    userForm.render();
  }
  // render a list of users using collection
  var users = new Collection(jsonDbLink, function (json) {
    return User.buildUser(json, jsonDbLink);
  });
  // set trigger event on change so it re-renders
  users.on("change", function () {
    var userListDiv = document.getElementById("user-list");
    if (userListDiv) {
      var userList = new UserList(userListDiv, users);
      userList.render();
    } else {
      throw new Error("Cannot get user list.");
    }
  });
  users.fetch();
});
