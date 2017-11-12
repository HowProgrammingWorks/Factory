'use strict';

function userFactory(name, group, email) {
  return { name, group, email };
}

/*

const userFactory = (name, group, email) => ({
  name, group, email
});

const userFactory = (name, group, email) => {
  name, group, email
};

*/

const user1 = userFactory('marcus', 'emperors', 'marcus@spqr.it');
console.log(user1);
