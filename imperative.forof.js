module.exports.imperativeForOf = data => {
  const users = [];
  for (const user of data) {
    if (user.isAdmin && user.age && user.age > 300 && user.age < 600) {
      const mappedUser = { name: user.name };
      users.push(mappedUser);
    }
  }
  return users;
};
