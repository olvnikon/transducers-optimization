module.exports.imperative = data => {
  const users = [];
  for (let i = 0; i < data.length; i++) {
    const user = data[i];
    if (user.age && user.age > 300) {
      const mappedUser = { name: user.name };
      users.push(mappedUser);
    }
  }
  return users;
};