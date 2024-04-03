/** helper class which stores attributes associated
 *  with a given model instance
 *  is called by passing in an interface/object
 *  which is then used as the template
 *  for the data associated with an instance of the model
 */
var Attributes = /** @class */ (function () {
    function Attributes(data) {
        var _this = this;
        this.data = data;
        /** use an advanced generic to
         *  dynamically define the types
         *  which are passed in as args
         *  here we specify that we are passing
         *  in a type of key that will be present
         *  on the data object and return the
         *  type specified in the T type for T of K
         */
        this.get = function (key) {
            return _this.data[key];
        };
    }
    /** set function to update the attribute
     *  data on the instance of the class we
     *  are working with
     *  does NOT save to DB
     */
    Attributes.prototype.set = function (update) {
        Object.assign(this.data, update);
    };
    // return all the attributes for the data
    Attributes.prototype.getAll = function () {
        return this.data;
    };
    return Attributes;
}());
export { Attributes };
