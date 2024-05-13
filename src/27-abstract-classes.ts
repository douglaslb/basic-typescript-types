{
  abstract class Veihcle {}

  const v = new Veihcle(); // Cannot create an instance of an abstract class

  abstract class Animal {
    public abstract makeSound(): void;
  }

  class Duck extends Animal {
    public makeSound() {
      console.log("Quack quack");
    }
  }

  class Dog extends Animal {}

  class Cat extends Animal {
    public makeSound(): void {
      throw new Error("Method not implemented.");
    }
  }
}

{
  abstract class Person {
    constructor(
      public name: string,
      public age: number,
      protected cpf: string
    ) {}

    public introduce() {
      console.log(`Hello, my name is ${this.name}`);
    }

    abstract sayProfession(): void;
  }

  class Student extends Person {
    private _id: string;

    constructor(name: string, age: number, cpf: string) {
      super(name, age, cpf);
      this._id = this.cpf + this.age;
    }

    public sayProfession() {
      console.log(`I'm a student`);
    }

    get id() {
      return this._id;
    }
  }

  const student = new Student("John", 20, "123.456.789-00");
  student.introduce(); // Hello, my name is John
  student.sayProfession(); // I'm a student

  const person: Person = new Student("John", 20, "123.456.789-00");
  person.sayProfession();
  person.id;
}

{
  interface Animal {
    name: string;
    age: number;
    makeSound(): void;
  }

  class Dog implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    makeSound() {
      console.log("Au au");
    }
  }

  interface Walkable {
    walk(): void;
  }

  interface Swimmable {
    swim(): void;
  }

  class Duck implements Animal, Walkable, Swimmable {
    constructor(public name: string, public age: number) {}

    makeSound() {
      console.log("Quack quack");
    }

    walk() {
      console.log("Walking");
    }

    swim() {
      console.log("Swimming");
    }
  }

  const duck: Animal = new Duck("Duck", 2);
  const donald: Duck = new Duck("Donald", 3);

  duck.name;
  duck.age;

  donald.swim();
  donald.walk();
}
