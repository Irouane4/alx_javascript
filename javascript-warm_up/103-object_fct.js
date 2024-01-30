// 103-object_fct.js

#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);

// Create a named function incr
const incrFunction = function incr() {
  this.value += 1;
};

// Add the named function to myObject
myObject.incr = incrFunction;

myObject.incr();
console.log(myObject);

myObject.incr();
console.log(myObject);

myObject.incr();
console.log(myObject);
