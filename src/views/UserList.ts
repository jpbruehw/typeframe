import { CollectionView } from "./CollectionView";
import { User, UserProps } from "../models/User";
import { UserShow } from "./UserShow";

export class UserList extends CollectionView<User, UserProps> {
  renderItem(models: User, itemParent: Element): void {
    new UserShow(itemParent, models).render();
    console.log("hello from renderItem");
  }
}
