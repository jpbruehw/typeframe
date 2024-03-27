import { User } from "./src/models/User";

const user = User.buildUser({ id: 1 });

user.fetch();
