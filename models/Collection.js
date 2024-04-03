"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
const Eventing_1 = require("./Eventing");
const axios_1 = __importDefault(require("axios"));
/** this is another generic helper class
 *  which lets the user interact
 *  with the instances they have created
 *  the class accepts two generic types T and K
 *  T: the class/structure the user has defined
 *  K: the structure of the JSON which will be deserialized
 */
class Collection {
    // define the rootUrl as well as the deserialization function
    constructor(rootUrl, deserialize) {
        this.rootUrl = rootUrl;
        this.deserialize = deserialize;
        this.models = [];
        this.events = new Eventing_1.Eventing();
    }
    // getters from Eventing class of interest
    get on() {
        return this.events.on;
    }
    get trigger() {
        return this.events.trigger;
    }
    fetch() {
        axios_1.default.get(this.rootUrl).then((response) => {
            response.data.forEach((value) => {
                this.models.push(this.deserialize(value));
            });
            this.trigger("change");
        });
    }
}
exports.Collection = Collection;
