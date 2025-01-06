'use strict';

const POOL_SIZE = 1000;

const pool = (factory) => {
  const items = new Array(POOL_SIZE).fill(null).map(() => factory());
  return (item) => {
    let res = null;
    if (item) {
      items.push(item);
      console.log('Recycle item, count =', items.length);
    } else {
      res = items.pop() || factory();
      console.log('Get from pool, count =', items.length);
    }
    return res;
  };
};

// Usage

const factory = () => new Array(1000).fill(0);
const arrayPool = pool(factory);

const a1 = arrayPool();
const b1 = a1.map((x, i) => i).reduce((x, y) => x + y);
console.log(b1);

const a2 = arrayPool();
const b2 = a2.map((x, i) => i).reduce((x, y) => x + y);
console.log(b2);

arrayPool(a1);
arrayPool(a2);

const a3 = arrayPool();
const b3 = a3.map((x, i) => i).reduce((x, y) => x + y);
console.log(b3);

// See: https://github.com/HowProgrammingWorks/Pool
