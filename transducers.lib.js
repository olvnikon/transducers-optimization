const { compose, filter, map, seq } = require('transducers.js');

const hasAge = user => !!user.age;
const olderThan = age => user => user.age > age;
const youngerThan = age => user => user.age < age;
const isAdmin = user => user.isAdmin;
const mapUser = user => ({ name: user.name });

module.exports.transducersLib = data => {
  const findUsers = compose(
    filter(isAdmin),
    filter(hasAge),
    filter(olderThan(300)),
    filter(youngerThan(600)),
    map(mapUser)
  );

  return seq(data, findUsers);
};
