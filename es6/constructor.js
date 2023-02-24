class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const atharv = new Person('Atharv', 22);
  atharv.greet(); // logs "Hello, my name is Atharv and I am 22 years old."