function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

//passing functions as arguments 
function sumOfSomethings(a, b, fn) {
  let val1 = fn(a);
  let val2 = fn(b);
  return val1 + val2;
}

let ans = sumOfSomethings(2, 2, square);
console.log(ans);
