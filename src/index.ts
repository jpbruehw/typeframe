import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";
import { UserForm } from "./views/UserForm";

// ensures dom is loaded before running any code
document.addEventListener("DOMContentLoaded", () => {
  /** link to db.json file on github rep
   *  in a development environment, use
   *  localhost link
   */
  // link for demo
  const jsonDbLink =
    "https://my-json-server.typicode.com/jpbruehw/typescript-web-framework/blob/main/users";
  // link for local development
  // const jsonDbLink = 'https://localhost:3000'
  console.log("hello i got here --");
  /** user form demo
   *  --------------
   *  we will create a new user by passing in
   *  an object of details which will demonstrate
   *  the user will be passed into the UserForm
   *  NOTE: full functionality of the UserForm works
   *  best with an actual db or localhost on desktop
   */
  // create a user object
  const userData: UserProps = {
    id: 4,
    name: "Alex",
    age: 25,
  };
  console.log("USER DATA: ", userData);
  /** get the parent element to pass in the form into
   *  query element from dom and then pass it in
   *  along with the user instance we create
   *  with the userData object
   */
  console.log("hello i got here --");
  // create user instance by calling static buildUser method
  const userFormUser = User.buildUser(userData, jsonDbLink);
  console.log("USER FORM USER: ", userFormUser);
  // query form div
  const formDiv = document.getElementById("single-user-demo");
  console.log("FORM DIV: ", formDiv);
  /** UserForm takes arguments for the parent
   *  element and the User instance we
   *  just created
   */
  if (formDiv) {
    const userForm = new UserForm(formDiv, userFormUser);
    userForm.render();
  }

  // render a list of users using collection
  const users = new Collection(jsonDbLink, (json: UserProps) => {
    console.log("DB URL: ", jsonDbLink);
    return User.buildUser(json, jsonDbLink);
  });
  console.log("USERS: ", users);
  // set trigger event on change so it re-renders
  users.on("change", () => {
    const userListDiv = document.getElementById("user-list");

    if (userListDiv) {
      const userList = new UserList(userListDiv, users);
      console.log("USER LSIT: ", userList);
      userList.render();
    } else {
      throw new Error("Cannot get user list.");
    }
  });

  users.fetch();
});
