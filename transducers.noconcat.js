const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
const map = f => step => (a, c) => step(a, f(c));
const filter = predicate => step => (a, c) => (predicate(c) ? step(a, c) : a);
const arrayConcat = (a, c) => {
  a.push(c);
  return a;
};

const hasAge = user => !!user.age;
const olderThan = age => user => user.age > age;
const mapUser = user => ({ name: user.name });

module.exports.transducersNoConcat = data => {
  const findUsers = compose(
    filter(hasAge),
    filter(olderThan(300)),
    map(mapUser)
  );

  return data.reduce(findUsers(arrayConcat), []);
};
