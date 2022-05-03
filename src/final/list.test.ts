import { createUser, USERS } from "../mocks";
import { List } from "./list";

describe("List", () => {
  it("sets default empty array", () => {
    expect(new List().toArray()).toEqual([]);
  });

  describe("toArray()", () => {
    it("returns native array", () => {
      expect(new List(USERS).toArray()).toEqual(USERS);
    });
  });

  describe("toCurrent()", () => {
    it("returns current element based on pointer value", () => {
      expect(new List(USERS).toCurrent()).toEqual(USERS[0]);
    });

    it("returns null for empty array", () => {
      expect(new List([]).toCurrent()).toBe(null);
    });

    it("allows to setup initial pointer", () => {
      expect(new List(USERS, 1).toCurrent()).toBe(USERS[1]);
    });
  });

  describe("prev()", () => {
    it("starts from last element when out of range", () => {
      expect(new List(USERS, 1).prev().prev().toCurrent()).toBe(USERS[1]);
    });
  });

  describe("next()", () => {
    it("starts from first element when out of range", () => {
      expect(new List(USERS).next().next().next().toCurrent()).toBe(USERS[1]);
    });
  });

  describe("swap()", () => {
    const USER_TO_SWAP = createUser("2", "Jacob");

    it("swaps objects by pointer", () => {
      expect(new List(USERS).swap(0, USER_TO_SWAP).toArray()).toEqual([
        USER_TO_SWAP,
        USERS[1]
      ]);
    });

    it("swaps objects by guid", () => {
      expect(new List(USERS).swap("0", USER_TO_SWAP).toArray()).toEqual([
        USER_TO_SWAP,
        USERS[1]
      ]);
    });
  });
});
