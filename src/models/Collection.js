import { Eventing } from "./Eventing";
import axios from "axios";
/** this is another generic helper class
 *  which lets the user interact
 *  with the instances they have created
 *  the class accepts two generic types T and K
 *  T: the class/structure the user has defined
 *  K: the structure of the JSON which will be deserialized
 */
var Collection = /** @class */ (function () {
    // define the rootUrl as well as the deserialization function
    function Collection(rootUrl, deserialize) {
        this.rootUrl = rootUrl;
        this.deserialize = deserialize;
        this.models = [];
        this.events = new Eventing();
    }
    Object.defineProperty(Collection.prototype, "on", {
        // getters from Eventing class of interest
        get: function () {
            return this.events.on;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "trigger", {
        get: function () {
            return this.events.trigger;
        },
        enumerable: false,
        configurable: true
    });
    Collection.prototype.fetch = function () {
        var _this = this;
        axios.get(this.rootUrl).then(function (response) {
            response.data.forEach(function (value) {
                _this.models.push(_this.deserialize(value));
            });
            _this.trigger("change");
        });
    };
    return Collection;
}());
export { Collection };
