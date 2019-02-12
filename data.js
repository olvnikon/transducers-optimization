module.exports.users = new Array(10000)
  .fill({ name: 'Ivan', age: 10 })
  .map((user, ind) => ({
    ...user,
    age: ind,
    isAdmin: ind % 2 === 0 ? undefined : true
  }));
