import { CollectionView } from "./CollectionView";
import { User, UserProps } from "../models/User";
import { UserShow } from "./UserShow";
/** this class renders a list of users which are
 *  passed in which transforms the model
 *  based on the render function in CollectionViews.ts
 *  and Views.ts
 *  renderItem is the implementation of an abstract function
 *  that renders a new UserShow instance, which extends Views.ts
 */
export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}
