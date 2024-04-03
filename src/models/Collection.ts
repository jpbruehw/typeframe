import { Eventing } from "./Eventing";
import axios, { AxiosResponse } from "axios";

/** this is another generic helper class
 *  which lets the user interact
 *  with the instances they have created
 *  the class accepts two generic types T and K
 *  T: the class/structure the user has defined
 *  K: the structure of the JSON which will be deserialized
 */
export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();
  // define the rootUrl as well as the deserialization function
  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}
  // getters from Eventing class of interest
  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }
  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: K) => {
        this.models.push(this.deserialize(value));
      });
      this.trigger("change");
    });
  }
}
