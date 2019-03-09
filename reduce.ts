import { User } from './data';

export const reduce = (data: User[]) =>
  data.reduce((users: { name: User['name'] }[], user) => {
    if (user.isAdmin && user.age && user.age > 300 && user.age < 600) {
      const mappedUser = { name: user.name };
      users.push(mappedUser);
    }
    return users;
  }, []);
