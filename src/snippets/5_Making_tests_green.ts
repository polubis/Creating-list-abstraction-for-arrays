import { Listable, EntityObject, GUID, Pointer } from "./1_API_design";

export class List<T extends EntityObject> implements Listable<T> {
  private _array: T[];
  private _pointer: Pointer;

  constructor(array: T[] = [], pointer: Pointer = 0) {
    this._array = array;
    this._pointer = pointer;
  }

  private _isPointer = (by: Pointer | GUID): by is Pointer =>
    typeof by === "number";

  private _isGUID = (by: Pointer | GUID): by is GUID => typeof by === "string";

  toArray = () => this._array;

  toCurrent = () => this._array[this._pointer] ?? null;

  prev = () =>
    new List(
      this._array,
      this._pointer - 1 === -1 ? this._array.length - 1 : this._pointer - 1
    );

  next = () =>
    new List(
      this._array,
      this._pointer + 1 === this._array.length ? 0 : this._pointer + 1
    );

  swap = (by: Pointer | GUID, value: T) => {
    if (this._isGUID(by)) {
      this._array = this._array.map((el) => (el.id === by ? value : el));
    }

    if (this._isPointer(by)) {
      this._array = [...this._array];
      this._array[by] = value;
    }

    return new List(this._array, this._pointer);
  };
}
