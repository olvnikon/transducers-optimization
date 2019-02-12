const hasAge = user => !!user.age;
const olderThan = age => user => user.age > age;
const mapUser = user => ({ name: user.name });

module.exports.chaining = data => {
  return data
    .filter(hasAge)
    .filter(olderThan(300))
    .map(mapUser);
};
