export class Attributes<T extends Object> {
  constructor(private data: T) {}

  /** use an advanced generic to
   *  dynamically define the types
   *  which are passed in as args
   */
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }

  // return all the attributes for the data
  getAll(): T {
    return this.data;
  }
}
