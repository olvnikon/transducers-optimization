export type User = {
  name: string;
  age: number;
  isAdmin?: boolean;
};

export const users: User[] = new Array(10000)
  .fill({ name: 'Ivan', age: 10 })
  .map((user, ind) => ({
    ...user,
    isAdmin: ind % 2 === 0 ? undefined : true,
  }));
