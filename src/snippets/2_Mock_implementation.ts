import { Listable, EntityObject, Pointer, GUID } from "./1_API_design";

export class List<T extends EntityObject> implements Listable<T> {
  constructor(array: T[]) {
    throw new Error("Not implemented");
  }

  toArray(): T[] {
    throw new Error("Not implemented");
  }
  toCurrent(): T | null {
    throw new Error("Not implemented");
  }
  prev(): Listable<T> {
    throw new Error("Not implemented");
  }
  next(): Listable<T> {
    throw new Error("Not implemented");
  }
  swap(by: Pointer | GUID, value: T): Listable<T> {
    throw new Error("Not implemented");
  }
}
