interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function isLegal(user: User) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

const val = isLegal({
  firstName: "Samyak",
  lastName: "Sukhdeve",
  age: 19,
});
