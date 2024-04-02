import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";

// ensures dom is loaded before running any code
document.addEventListener("DOMContentLoaded", () => {
  const jsonDbLink =
    "https://my-json-server.typicode.com/jpbruehw/typescript-web-framework/blob/main/users";

  // render a list of users using collection
  const users = new Collection(jsonDbLink, (json: UserProps) => {
    return User.buildUser(json);
  });

  users.on("change", () => {
    const root = document.getElementById("root");

    if (root) {
      const userList = new UserList(root, users);
      userList.render();
    } else {
      throw new Error("Cannot get user list.");
    }
  });

  users.fetch();
});
