import { compose, filter, map, seq } from 'transducers.js';
import { User } from './data';

const hasAge = (user: User) => !!user.age;
const olderThan = (age: User['age']) => (user: User) => user.age > age;
const youngerThan = (age: User['age']) => (user: User) => user.age < age;
const isAdmin = (user: User) => !!user.isAdmin;
const mapUser = (user: User) => ({ name: user.name });

export const transducersLib = (data: User[]) => {
  const findUsers = compose(
    filter(isAdmin),
    filter(hasAge),
    filter(olderThan(300)),
    filter(youngerThan(600)),
    map(mapUser),
  );

  return seq(data, findUsers);
};
