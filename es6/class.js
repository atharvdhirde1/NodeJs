class Animal {
    constructor(name, act) {
      this.name = name;
      this.act = act;
    }
  
    makeAct() {
      console.log(`${this.name} act ${this.act}`);
    }
  }
  
  const cat = new Animal('Cat', 'walk');
  const dog = new Animal('Dog', 'Run');
  
  cat.makeAct(); // logs "Cat act Walk"
  dog.makeAct(); // logs "Dog act Run"