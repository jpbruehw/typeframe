"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiSync = void 0;
const axios_1 = __importDefault(require("axios"));
class ApiSync {
    /** pass the root url into the constructor function
     *  this makes it easier reference later
     */
    constructor(rootUrl) {
        this.rootUrl = rootUrl;
    }
    /** create fetch method to get
     *  information from a db
     *  for an instance of a model based on id
     */
    fetch(id) {
        return axios_1.default.get(`${this.rootUrl}/${id}`);
    }
    /** create method to save a user
     *  this save method needs to be updated
     *  depending on the model context
     *  if there exists an id property on the data
     *  NOTE: edit the /users/ portion of the save method
     */
    save(data) {
        const { id } = data;
        if (id) {
            return axios_1.default.put(`${this.rootUrl}/users/${id}`, data);
        }
        else {
            return axios_1.default.post(`${this.rootUrl}/users`, data);
        }
    }
}
exports.ApiSync = ApiSync;
