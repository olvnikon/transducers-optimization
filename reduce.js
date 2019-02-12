module.exports.reduce = data => {
  return data.reduce((users, user) => {
    if (user.isAdmin && user.age && user.age > 300 && user.age < 600) {
      const mappedUser = { name: user.name };
      users.push(mappedUser);
    }
    return users;
  }, []);
};
