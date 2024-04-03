/** helper class which stores attributes associated
 *  with a given model instance
 *  is called by passing in an interface/object
 *  which is then used as the template
 *  for the data associated with an instance of the model
 */
export class Attributes<T extends Object> {
  constructor(private data: T) {}
  /** use an advanced generic to
   *  dynamically define the types
   *  which are passed in as args
   *  here we specify that we are passing
   *  in a type of key that will be present
   *  on the data object and return the
   *  type specified in the T type for T of K
   */
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };
  /** set function to update the attribute
   *  data on the instance of the class we
   *  are working with
   *  does NOT save to DB
   */
  set(update: T): void {
    Object.assign(this.data, update);
  }
  // return all the attributes for the data
  getAll(): T {
    return this.data;
  }
}
