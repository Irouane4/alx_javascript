#!/usr/bin/node
const myObject = {
    type: 'object',
    value: 12
  };
  console.log(myObject);
  
  myObject.incr = function () {
    this.value++;
    return this;
  };
  
  console.log(myObject.incr());
  console.log(myObject.incr());
  console.log(myObject.incr());