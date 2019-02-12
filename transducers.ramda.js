const R = require('ramda');

const hasAge = user => !!user.age;
const olderThan = age => user => user.age > age;
const isAdmin = user => user.isAdmin;
const mapUser = user => ({ name: user.name });

module.exports.transducersRamda = data => {
  const findUsers = R.compose(
    R.filter(isAdmin),
    R.filter(hasAge),
    R.filter(olderThan(300)),
    R.map(mapUser)
  );

  return R.transduce(findUsers, R.flip(R.append), [], data);
};
