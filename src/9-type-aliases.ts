{
  type MyType = string;
  
  function foo(x: MyType) {
    return x;
  }

  type NullableString = string | null;

  function sayHello(name: NullableString) {
    if (name) {
      console.log(`Hello, ${name}!`);
    }
    return name;
  }

  sayHello('John');

  type Nullable<T> = T | null;
  
  function sayHello2(name: Nullable<string>) {
    if (name) {
      console.log(`Hello, ${name}!`);
    }
    return name;
  }

  sayHello(null);
}

{
  type User = {
    name: string
  }

  const user: User = { name: 'John' };
  const user2: User = { name: 'Doe' };
}

{
  type A = string;
  type B = number;
  type C = boolean;

  type D = A | B | C;
}