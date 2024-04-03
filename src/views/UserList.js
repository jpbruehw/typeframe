"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserList = void 0;
const CollectionView_1 = require("./CollectionView");
const UserShow_1 = require("./UserShow");
/** this class renders a list of users which are
 *  passed in which transforms the model
 *  based on the render function in CollectionViews.ts
 *  and Views.ts
 *  renderItem is the implementation of an abstract function
 *  that renders a new UserShow instance, which extends Views.ts
 */
class UserList extends CollectionView_1.CollectionView {
    renderItem(model, itemParent) {
        new UserShow_1.UserShow(itemParent, model).render();
    }
}
exports.UserList = UserList;
