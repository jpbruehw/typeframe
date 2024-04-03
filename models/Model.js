"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
/** generic model to handle the creation
 *  of many different types of structures for
 *  an app, built to be flexible and accommodate
 */
var Model = /** @class */ (function () {
    function Model(attributes, events, sync) {
        this.attributes = attributes;
        this.events = events;
        this.sync = sync;
        /** get methods to access the methods
         *  from other classes so we can
         *  access them directly on the user class
         */
        this.on = this.events.on;
        this.trigger = this.events.trigger;
        this.get = this.attributes.get;
    }
    /** method to update data locally
     *  in the current session,
     *  does not commit the changes to
     *  a database
     */
    Model.prototype.set = function (update) {
        this.attributes.set(update);
        this.events.trigger("change");
    };
    /** fetch method
     *  a new user will not yet have an id
     *  so we need to account for that
     */
    Model.prototype.fetch = function () {
        var _this = this;
        var id = this.attributes.get("id");
        if (typeof id !== "number") {
            throw new Error("Cannot fetch without an id.");
        }
        this.sync.fetch(id).then(function (response) {
            _this.set(response.data);
        });
    };
    /** method to save any new user data
     *  uses the attributes class to
     *  first get all of the relevant user data
     *  then commit it using the sync save method
     */
    Model.prototype.save = function () {
        this.sync
            .save(this.attributes.getAll())
            .then(function (response) {
            console.log("Saved Model Data: ", response.data);
        })
            .catch(function (e) {
            console.error("Error saving user: ", e);
        });
    };
    return Model;
}());
exports.Model = Model;
