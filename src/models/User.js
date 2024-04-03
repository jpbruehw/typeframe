"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Model_1 = require("./Model.js");
const Attributes_1 = require("./Attributes.js");
const ApiSync_1 = require("./ApiSync.js");
const Eventing_1 = require("./Eventing.js");
const Collection_1 = require("./Collection.js");
/** user class for demonstration purposes
 *  basic user class that is a direct implementation
 *  of the Model.ts file and implements the
 *  Eventing, ApiSync, and Attributes
 */
class User extends Model_1.Model {
  /** static function to  build a user
   *  returns an instance of the user class itself
   *  is a direct implementation of the model class
   *  refer to model.ts
   */
  static buildUser(attrs, rootUrl = "https://localhost:3000") {
    return new User(
      new Attributes_1.Attributes(attrs),
      new Eventing_1.Eventing(),
      new ApiSync_1.ApiSync(rootUrl)
    );
  }
  /** static function to return a collection of users
   *  takes the default local host url as input
   *  unless otherwise specified
   */
  static buildUserCollection(rootUrl = "https://localhost:3000") {
    return new Collection_1.Collection(rootUrl, (json) =>
      User.buildUser(json, rootUrl)
    );
  }
}
exports.User = User;
