#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
      if (w <= 0 || !Number.isInteger(w) || h <= 0 || !Number.isInteger(h)) {
        this.width = 0;
        this.height = 0;
      } else {
        this.width = w;
        this.height = h;
      }
    }
  }
  
  module.exports = Rectangle;
  