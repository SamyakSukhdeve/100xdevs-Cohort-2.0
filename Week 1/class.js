class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
    }
    //static functions are specific to class
  static myType() {
    return console.log("Animal");
  }
  speaks() {
    return console.log("hi there" + this.speaks);
  }
}

//creating object of class
let dog = new Animal("dog", 4, "bhow bhow");
let cat = new Animal("cat", 4, "meow meow");
//call function on object
console.log(cat.speaks);
