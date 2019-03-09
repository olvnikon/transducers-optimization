import R from 'ramda';
import { User } from './data';

const hasAge = (user: User) => !!user.age;
const olderThan = (age: User['age']) => (user: User) => user.age > age;
const youngerThan = (age: User['age']) => (user: User) => user.age < age;
const isAdmin = (user: User) => !!user.isAdmin;
const mapUser = (user: User) => ({ name: user.name });

export const transducersRamda = (data: User[]) => {
  const findUsers = R.compose(
    R.filter(isAdmin),
    R.filter(hasAge),
    R.filter(olderThan(300)),
    R.filter(youngerThan(600)),
    R.map(mapUser),
  );

  return R.transduce(findUsers, R.flip(R.append), [], data);
};
