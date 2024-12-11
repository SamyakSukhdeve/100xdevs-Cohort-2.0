//arguments to function
function hello(userName: String) {
  console.log("hello" + userName);
}

hello("Samyak");

//returning values from a function
function sum(a: number, b: number): number {
  return a + b;
}

const value = sum(1, 2);
console.log(value);

//typr inferance
function isLegal1(age: number) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

//function as an argument

function delayFunctionCall(fn: () => void) {
  setTimeout(fn, 2000);
}

delayFunctionCall(() => {
  console.log("Hi");
});
