import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { ApiSync } from "./ApiSync";
import { Eventing } from "./Eventing";
import { Collection } from "./Collection";
/** that defines the information
 *  we are attaching to a user instance
 */
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
/** user class for demonstration purposes
 *  basic user class that is a direct implementation
 *  of the Model.ts file and implements the
 *  Eventing, ApiSync, and Attributes
 */
export class User extends Model<UserProps> {
  /** static function to  build a user
   *  returns an instance of the user class itself
   *  is a direct implementation of the model class
   *  refer to model.ts
   */
  static buildUser(
    attrs: UserProps,
    rootUrl: string = "https://localhost:3000"
  ): User {
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
  static buildUserCollection(
    rootUrl: string = "https://localhost:3000"
  ): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
      User.buildUser(json, rootUrl)
    );
  }
}
