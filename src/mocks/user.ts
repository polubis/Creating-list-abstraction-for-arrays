import { EntityObject, GUID } from "../final";

export interface User extends EntityObject {
  username: string;
}

export const createUser = (
  id: GUID,
  username: string,
  modificationDate?: Date
): User => ({
  creationDate: new Date(),
  modificationDate: modificationDate ?? null,
  id,
  username
});

export const USERS = [
  createUser("0", "Robert"),
  createUser("1", "Tom", new Date())
];

export const getUsers = (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        ...USERS,
        createUser("2", "Carol", new Date()),
        createUser("3", "Tymon", new Date())
      ]);
    }, 1000);
  });
};
