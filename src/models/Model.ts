/** set up different interfaces to manage
 *  the different aspects of out base model
 *  class which will consist of the attributes,
 *  the different events, and a way to sync data
 */
import { AxiosPromise, AxiosResponse } from "axios";
/** need to reflect the fact that there is some
 *  type uncertainty in this case, so we need
 *  to account for that in our attributes
 */
interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}
/** need to use generic type for sync
 *  api library we are working with is axios
 *  so the axios promise framework is what
 *  will be returned
 */
interface ApiSync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

/** this interface handles the events that we want to
 *  manage in our Model class
 */
interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

/** we need another interface to define how
 *  the id property needs to be accounted for,
 *  we create an id interface and have Model
 *  extend it, which is basically saying tha the
 *  model will always be passed an id property,
 *  but the id could be undefined when implemented
 */
export interface HasId {
  id?: number;
}

/** generic model to handle the creation
 *  of many different types of structures for
 *  an app, built to be flexible and accommodate
 */
export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: ApiSync<T>
  ) {}

  /** method to update data locally
   *  in the current session,
   *  does not commit the changes to
   *  a database
   */
  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger("change");
  }

  /** fetch method
   *  a new user will not yet have an id
   *  so we need to account for that
   */
  fetch(): void {
    const id = this.attributes.get("id");

    if (typeof id !== "number") {
      throw new Error("Cannot fetch without an id.");
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  /** get methods to access the methods
   *  from other classes so we can
   *  access them directly on the user class
   */
  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

  /** method to save any new user data
   *  uses the attributes class to
   *  first get all of the relevant user data
   *  then commit it using the sync save method
   */
  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        console.log("Saved Model Data: ", response.data);
      })
      .catch((e) => {
        console.error("Error saving user: ", e);
      });
  }
}
