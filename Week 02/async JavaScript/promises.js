//promises are used to eleminate callbacks
//most commenly used for async tasks
let p = new Promise((resolve, reject) => {
  let a = 1 + 3;
  if (a == 2) {
    resolve("Sucess");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log(message);
}).catch((err) => {
  console.log(err);
});
