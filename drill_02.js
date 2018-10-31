'use strict';

// Modify the updateObject function (which takes a single argument (obj)) so that it adds the following key/value pairs to obj and returns it:

// foo => 'foo'
// bar => 'bar'
// bizz => 'bizz'
// bang => 'bang'


function updateObject(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj['bang'] = 'bang';
  return obj;
}

console.log(updateObject({}));
