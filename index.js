class Animal{
  constructor(name, legCount, speak){
    this.name = name;
    this.legCount = legCount;
    this.speak = speak;
  }

  speak(){
    console.log("Hi there" + this.speak);
  }
  static myType(){
    console.log("Animal");
  }
}
console.log(Animal.myType());
let dog = new Animal("dog", 4, "woof"); // this creating object of an class
let cat = new Animal("cat", 4, "meow");

console.log(dog.speak);