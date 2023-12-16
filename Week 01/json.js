const data = {
  name: "Samyak Sukdeve",
  age: 21,
  gender: "male",
};

const jsonStringified = JSON.stringify(data);
console.log(jsonStringified);

const parsedData = JSON.parse(jsonStringified);
console.log(parsedData);
