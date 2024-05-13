{
  interface Animal {
    name: string;
    age: number;
  }

  interface Dog extends Animal {
    breed: string;
  }

  const dog: Dog = { name: "Rex", age: 10, breed: "Golden Retriever" };

  const animal: Animal = dog;
  animal.name;
  animal.age;
  (animal as Dog).breed;
}

{
  interface Animal {
    name: string;
    age: number;
  }

  interface Flyable {
    fly(): void;
  }

  interface Swimmable {
    swim(): void;
  }

  interface Walkable {
    walk(): void;
  }

  interface Duck extends Animal, Flyable, Swimmable, Walkable {
    color: string;
  }

  const donald: Duck = {
    name: "Donald",
    age: 5,
    color: "white",
    fly: () => {},
    swim: () => {},
    walk: () => {},
  };

  const walkable: Walkable = donald;
  walkable.walk();
}

{
  class Animal {
    public name: string = "";
    public age: number = 0;
  }

  interface Dog extends Animal {
    breed: string;
  }

  const dog: Dog = { name: "Rex", age: 10, breed: "Golden Retriever" };

  const arrayReadonly: ReadonlyArray<number> = [1, 2, 3];
}
