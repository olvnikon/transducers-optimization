module.exports.users = new Array(10000)
  .fill({ name: 'Ivan', age: 10 })
  .map((user, ind) => ({ ...user, age: ind }));
