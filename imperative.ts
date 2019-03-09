import { User } from './data';

export const imperative = (data: User[]) => {
  const users = [];
  for (let i = 0; i < data.length; i++) {
    const user = data[i];
    if (user.isAdmin && user.age && user.age > 300 && user.age < 600) {
      const mappedUser = { name: user.name };
      users.push(mappedUser);
    }
  }
  return users;
};
