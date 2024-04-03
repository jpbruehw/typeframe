import axios from "axios";
var ApiSync = /** @class */ (function () {
    /** pass the root url into the constructor function
     *  this makes it easier reference later
     */
    function ApiSync(rootUrl) {
        this.rootUrl = rootUrl;
    }
    /** create fetch method to get
     *  information from a db
     *  for an instance of a model based on id
     */
    ApiSync.prototype.fetch = function (id) {
        return axios.get("".concat(this.rootUrl, "/").concat(id));
    };
    /** create method to save a user
     *  this save method needs to be updated
     *  depending on the model context
     *  if there exists an id property on the data
     *  NOTE: edit the /users/ portion of the save method
     */
    ApiSync.prototype.save = function (data) {
        var id = data.id;
        if (id) {
            return axios.put("".concat(this.rootUrl, "/users/").concat(id), data);
        }
        else {
            return axios.post("".concat(this.rootUrl, "/users"), data);
        }
    };
    return ApiSync;
}());
export { ApiSync };
