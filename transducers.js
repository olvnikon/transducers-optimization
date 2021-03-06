const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
const map = f => step => (a, c) => step(a, f(c));
const filter = predicate => step => (a, c) => (predicate(c) ? step(a, c) : a);
const arrayConcat = (a, c) => a.concat(c);

const hasAge = user => !!user.age;
const olderThan = age => user => user.age > age;
const youngerThan = age => user => user.age < age;
const isAdmin = user => user.isAdmin;
const mapUser = user => ({ name: user.name });

module.exports.transducers = data => {
  const findUsers = compose(
    filter(isAdmin),
    filter(hasAge),
    filter(olderThan(300)),
    filter(youngerThan(600)),
    map(mapUser)
  );

  return data.reduce(findUsers(arrayConcat), []);
};
