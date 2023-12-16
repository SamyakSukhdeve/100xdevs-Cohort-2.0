//Basic functions in Javascript

//push, pop, shift

const arr = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];
// add val in end
arr.push(5);
console.log(arr);

// remove val from end
arr.pop();
console.log(arr);

//remove val from start
arr.shift();
console.log(arr);

//add val in start
arr.unshift(0);
console.log(arr);

//concat add two array
console.log(arr.concat(arr2));

// forEach loop
arr2.forEach((i) => {
  console.log(i);
});
 