/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
  function calculatSum(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += i;
    }
    return sum;
  }

  const beforDate = new Date();
  const beforeTimeInMs = beforDate.getTime();
  console.log("Sum = " + calculatSum(n));
  const afterDate = new Date();
  const afterTimeInMs = afterDate.getTime();
  const timeTaken = afterTimeInMs - beforeTimeInMs;
  const seconds = Math.floor((timeTaken / 1000) % 60);
  return seconds;
}

console.log(calculateTime(1000000000));
