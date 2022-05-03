export type GUID = string;
export type Pointer = number;

export interface EntityObject {
  id: GUID;
  creationDate: Date;
  modificationDate: Date | null;
}

export interface Listable<T extends EntityObject> {
  toArray(): T[]; // gets native JS array
  toCurrent(): T | null; // gets object tracked by pointer
  prev(): Listable<T>; // moves pointer left
  next(): Listable<T>; // moves pointer right
  swap(by: GUID | Pointer, value: T): Listable<T>; // swaps items by guid or pointer
}
