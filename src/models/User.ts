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

export class User extends Model<UserProps> {
  // default value for url in development
  static rootUrl: string = "http://localhost:3000";
  /** static function to  */

  static buildUser(attrs: UserProps, rootUrl: string = User.rootUrl): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }

  static buildUserCollection(rootUrl?: string): Collection<User, UserProps> {
    const collectionRootUrl = rootUrl ?? User.rootUrl;
    return new Collection<User, UserProps>(
      collectionRootUrl,
      (json: UserProps) => User.buildUser(json)
    );
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
    console.log(age);
  }
}
