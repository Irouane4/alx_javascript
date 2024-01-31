#!/usr/bin/node
class Square extends Rectangle {
    constructor(size) {
      super(size, size);
    }
  }
  
  class SquareWithCharPrint extends Square {
    charPrint(c) {
      if (c === undefined) {
        c = 'X';
      }
  
      for (let i = 0; i < this.height; i++) {
        console.log(c.repeat(this.width));
      }
    }
  }
  
  module.exports = SquareWithCharPrint;
  