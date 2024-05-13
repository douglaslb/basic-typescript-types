{
  class Foo {}

  class Foo {}

  class Animal {
    public age: number;
    name: string = "";

    //Soft private o que significa que o atributo é privado mas pode ser acessado em tempo de execução.
    private id: string = "";

    //Hard private o que significa que o atributo só é acesso pela classe Animal.
    #privateId: number = 0;

    //Só é acessível pelas classes que herdam de Animal.
    protected weight: number = 0;

    readonly creationDate: Date = new Date();

    private readonly hash: string = "";

    protected readonly original: boolean = true;

    readonly #color: string = "";

    constructor(name: string, age: number) {
      this.age = age;
      this.name = name;
      this.id = "123";
      this.#privateId = 123;
      this.#color = "red";
      this.hash = btoa(this.name + this.age);
      this.weight = 10;
    }
  }

  const animal = new Animal("Rex", 10);

  animal.name;
  animal.age;
  animal.creationDate;

  animal.color;
  animal.id;
}

{
  class Car {
    constructor(
      public readonly brand: string,
      public readonly model: string,
      readonly year: number,
      private color: string,
      protected readonly motor: string
    ) {}
  }

  class Bike {
    constructor(
      public readonly brand: string,
      public readonly chassi?: string,
      ...rest: string[]
    ) {}
  }

  const car: Car = new Car("Chevrolet", "Cruze", 2021, "black", "1.4");

  const bike = new Bike("Honda", "123");
  const bike2 = new Bike("Honda");
  const bike3 = new Bike("Honda", "123", "foo", "bar");
}

{
  class Car {
    [prop: string]: string | number | boolean;

    constructor(
      public readonly brand: string,
      readonly year: number,
      ...rest: { name: string; value: string | number | boolean }[]
    ) {
      for (const { name, value } of rest) {
        this[name] = value;
      }
    }
  }

  const car = new Car("Chevrolet", 2021, { name: "color", value: "black" });
  car.year;
  car.brand;
  car["color"];
}

{
  class Car {
    #isOn: boolean = false;
    #speed: number = 0;

    constructor(
      readonly name: string,
      readonly brand: string,
      readonly year: number
    ) {}

    public accelerate() {
      console.log(`Accelerating to ${this.#speed}`);
    }

    private brake() {
      console.log(`Braking`);
    }

    #turnOn() {
      console.log("Turning on");
      this.#isOn = true;
    }

    protected honk() {
      console.log(`Honking`);
    }

    get isOn() {
      return this.#isOn;
    }

    set speed(speed: number) {
      this.#speed = speed;
    }
  }

  const car = new Car("Cruze", "Chevrolet", 2021);
  car.accelerate();
  car.speed = 10;
  car.isOn;
  car.brake;
  car.turnOn;
}

{
  class Animal {
    constructor(readonly name: string, readonly age: number) {}

    public eat() {
      console.log("Eating");
    }
  }

  class Dog extends Animal {
    constructor(name: string, age: number, readonly breed: string) {
      super(name, age);
    }

    public bark() {
      console.log("Barking");
    }
  }

  const dog = new Dog("Rex", 10, "Golden Retriever");
  dog.eat();
  dog.bark();
  dog.name;
  dog.age;

  const dog2: Animal = new Animal("Bob", 5);
}
