const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();
const { users } = require('./data');
const { imperative } = require('./imperative');
const { transducers } = require('./transducers');
const { transducersNoConcat } = require('./transducers.noconcat');
const { chaining } = require('./chaining');

suite
  .add('imperative', () => {
    imperative(users);
  })
  .add('transducers', () => {
    transducers(users);
  })
  .add('transducersNoConcat', () => {
    transducersNoConcat(users);
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
