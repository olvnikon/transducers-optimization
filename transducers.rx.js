const { from } = require('rxjs');
const { map, filter, reduce } = require('rxjs/operators');

const hasAge = user => !!user.age;
const olderThan = age => user => user.age > age;
const youngerThan = age => user => user.age < age;
const isAdmin = user => user.isAdmin;
const mapUser = user => ({ name: user.name });
const accumulateUsers = (users, user) => {
  users.push(user);
  return users;
};

module.exports.transducersRxJs = data => {
  return from(data).pipe(
    filter(isAdmin),
    filter(hasAge),
    filter(olderThan(300)),
    filter(youngerThan(600)),
    map(mapUser),
    reduce(accumulateUsers, [])
  );
};
