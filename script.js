var isSquare = function (n) {
  z = Math.round(Math.sqrt(n));
  return z * z === n ? true : false;
};

let a = -1;
let b = 0;
let c = 1;
let d = 39;
console.log(Math.sqrt(d));
console.log(isSquare(a));
console.log(isSquare(b));
console.log(isSquare(d));
