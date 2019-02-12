module.exports.reduce = data => {
  return data.reduce((users, user) => {
    if (user.age && user.age > 300) {
      const mappedUser = { name: user.name };
      users.push(mappedUser);
    }
    return users;
  }, []);
};
