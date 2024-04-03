"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserList = void 0;
var CollectionView_1 = require("./CollectionView");
var UserShow_1 = require("./UserShow");
/** this class renders a list of users which are
 *  passed in which transforms the model
 *  based on the render function in CollectionViews.ts
 *  and Views.ts
 *  renderItem is the implementation of an abstract function
 *  that renders a new UserShow instance, which extends Views.ts
 */
var UserList = /** @class */ (function (_super) {
    __extends(UserList, _super);
    function UserList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserList.prototype.renderItem = function (model, itemParent) {
        new UserShow_1.UserShow(itemParent, model).render();
    };
    return UserList;
}(CollectionView_1.CollectionView));
exports.UserList = UserList;
