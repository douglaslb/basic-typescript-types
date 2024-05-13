{
  function sum(a: number, b: number): number {
    return a + b;
  }

  function foo<T>(a: T, b: T): T {
    return a;
  }

  function log(message: string): void {}

  function bar(message: string) {
    return message;
  }

  bar(1);

  function error(message: string): number {
    return message;
  }
}

{
  // Named function

  // Function declaration
  function sum(a: number, b: number): number {
    return a + b;
  }

  // Named function expression
  const sum = function sum(a: number, b: number): number {
    return a + b;
  };

  // Anonymous function

  // Anonymous Function expression
  const sum2 = function (a: number, b: number) {};

  // Arrow function
  const arrow = (a: number, b: number) => a + b;

  // IIFE (Immediately Invoked Function Expression)
  (function () {
    console.log("IIFE");
  })();

  // IIFE with arrow function
  (() => {
    console.log("IIFE");
  })();

  // Constructor function
  const dynamicSum = new Function("a", "b", "return a + b");
  dynamicSum(1, 2);
}

{
  function foo(a: number, b?: number) {}
  function bar(a?: number, b: number) {}
  function def(a: number, b = 10) {}
}

{
  function fooVariadic(...args: number[]) {}
  fooVariadic(1, 2, 3, 4, 5);

  function fooArray(args: number[]) {}
  fooArray([1, 2, 3, 4, 5]);

  function a(x: number, ...args: number[]) {}
  function b(...args: number[], x: number) {}
  function Colors(...args: number[], ...x: number) {}
}

{
  //Call Signatures

  interface foo {
    fn: (a: number, b: number) => number;
  }

  type MyFn = (a: number, b?: number) => number;
  type Variadic = (...args: number[]) => number[];

  let variadic: Variadic = (...args) => args;
}
