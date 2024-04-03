var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
import { Model } from "./Model.js";
import { Attributes } from "./Attributes.js";
import { ApiSync } from "./ApiSync.js";
import { Eventing } from "./Eventing.js";
import { Collection } from "./Collection.js";
/** user class for demonstration purposes
 *  basic user class that is a direct implementation
 *  of the Model.ts file and implements the
 *  Eventing, ApiSync, and Attributes
 */
var User = /** @class */ (function (_super) {
  __extends(User, _super);
  function User() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  /** static function to  build a user
   *  returns an instance of the user class itself
   *  is a direct implementation of the model class
   *  refer to model.ts
   */
  User.buildUser = function (attrs, rootUrl) {
    if (rootUrl === void 0) {
      rootUrl = "https://localhost:3000";
    }
    return new User(
      new Attributes(attrs),
      new Eventing(),
      new ApiSync(rootUrl)
    );
  };
  /** static function to return a collection of users
   *  takes the default local host url as input
   *  unless otherwise specified
   */
  User.buildUserCollection = function (rootUrl) {
    if (rootUrl === void 0) {
      rootUrl = "https://localhost:3000";
    }
    return new Collection(rootUrl, function (json) {
      return User.buildUser(json, rootUrl);
    });
  };
  return User;
})(Model);
export { User };
