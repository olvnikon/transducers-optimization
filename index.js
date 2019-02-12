const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();
const { users } = require('./data');
const { imperative } = require('./imperative');
const { imperativeForOf } = require('./imperative.forof');
const { transducers } = require('./transducers');
const { transducersNoConcat } = require('./transducers.noconcat');
const { transducersRamda } = require('./transducers.ramda');
const { chaining } = require('./chaining');
const { reduce } = require('./reduce');

suite
  .add('imperative', () => {
    imperative(users);
  })
  .add('imperativeForOf', () => {
    imperativeForOf(users);
  })
  .add('transducers', () => {
    transducers(users);
  })
  .add('transducersNoConcat', () => {
    transducersNoConcat(users);
  })
  .add('transducersRamda', () => {
    transducersRamda(users);
  })
  .add('reduce', () => {
    reduce(users);
  })
  .add('chaining', () => {
    chaining(users);
  })
  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ async: true });
