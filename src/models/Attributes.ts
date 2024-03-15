import { UserProps } from "./User";

export class Attributes<T> {
  constructor(private data: T) {}

  /** use a type union to define multiple return types */
  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
