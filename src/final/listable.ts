export type GUID = string;
export type Pointer = number;

export interface EntityObject {
  id: GUID;
  creationDate: Date;
  modificationDate: Date | null;
}

export interface Listable<T extends EntityObject> {
  toArray(): T[];
  toCurrent(): T | null;
  prev(): Listable<T>;
  next(): Listable<T>;
  swap(by: GUID | Pointer, value: T): Listable<T>;
}
