import axios, { AxiosPromise } from "axios";

/** without this interface TypeScript won't
 *  know that the generic type that we pass
 *  in will always have an ID property
 *  this lets us still pass in any type but
 *  it must have an id attribute
 */
interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> {
  /** pass the root url into the constructor function
   *  this makes it easier reference later
   */
  constructor(public rootUrl: string) {}

  /** create fetch method to get
   *  information from a db
   *  for an instance of a model based on id
   */
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  /** create method to save a user
   *  this save method needs to be updated
   *  depending on the model context
   *  if there exists an id property on the data
   *  NOTE: edit the /users/ portion of the save method
   */
  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      return axios.put(`${this.rootUrl}/users/${id}`, data);
    } else {
      return axios.post(`${this.rootUrl}/users`, data);
    }
  }
}
