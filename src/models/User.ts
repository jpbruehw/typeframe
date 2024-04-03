import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { ApiSync } from "./ApiSync";
import { Eventing } from "./Eventing";
import { Collection } from "./Collection";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
/** user class for demonstration purposes
 *  basic user class that lets
 */
export class User extends Model<UserProps> {
  // default value for url in development
  static rootUrl: string =
    "https://my-json-server.typicode.com/jpbruehw/typescript-web-framework/blob/main/users";
  /** static function to  build a user
   *  returns an instance of the user class itself
   *  is a direct implementation of the model class
   *  refer to model.ts
   */
  static buildUser(attrs: UserProps, rootUrl: string = User.rootUrl): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }
  /** static function to return a collection of users
   *  takes the default local host url as input
   *  unless otherwise specified
   */
  static buildUserCollection(): Collection<User, UserProps> {
    const collectionRootUrl =
      "https://my-json-server.typicode.com/jpbruehw/typescript-web-framework/blob/main/users";
    return new Collection<User, UserProps>(
      collectionRootUrl,
      (json: UserProps) => User.buildUser(json, collectionRootUrl)
    );
  }
}
