let number = 0;

function add(a, b) {
  number = a + b;
  return number;
}

const result1 = add(3, 5);
const result2 = add(2, 6);

console.log(result1); // 8
console.log(result2); // 8