import { UserForm } from "./views/UserForm";
import { User } from "./models/User";
import { UserProps } from "./models/User";

// ensures dom is loaded before running any code
document.addEventListener("DOMContentLoaded", () => {
  // Create an object with user properties
  const userProps: UserProps = {
    id: 1,
    name: "John",
    age: 30,
  };
  console.log("hello");
  // Create a new user instance using the properties
  const user = User.buildUser(userProps, "http://localhost:3000");
  console.log(user);

  if (typeof window !== "undefined") {
    const bodyElement = document.body;
    console.log("This is the document body: ", bodyElement);
    const userForm = new UserForm(bodyElement, user);

    userForm.render();
  } else {
    throw new Error("Body not found");
  }
});
