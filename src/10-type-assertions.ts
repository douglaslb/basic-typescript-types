{
  const type: any = 'Hello World';
  const type2 = type as string; //explicit casting
  const type3 = <string>type; //diamond casting

  const literalType = 'literal' as 'literal';
  const literalType2 = 'literal' as 'literal';

  let length: number = (type as string).length;
}

{
  const foo: unknown = { a: 1, b: 'any value' }
  // foo.a
  ;(foo as { a: number, b: string }).a;

  interface SomeInterface {
    a: number;
    b: string;
  }

  ;(foo as SomeInterface).a;
}

{
  const a: string = 123 as string;
  const a: string = 123 as unknown as string;
}

{
  interface Person {}

  let person: Person = {};

  person.name = 'John Doe';

  interface Person2 {
    name: string
  }

  let person2: Person2 = {};
  let person3: Person2 = {} as Person2;
}

{
  interface Answers {
    name: string;
    email: string;
    phone?: string;
    address?: string;
  }
  
  interface User {
    name: string;
    email: string;
    phone?: string;
    lat?: number;
    lon?: number;
  }

  const answers: Answers = {
    name: 'John Doe',
    email: 'john@doe.com',
    phone: '123456789',
  }

  const user: User = {
    name: answers.name,
    email: answers.email,
  }

  if(answers.phone) {
    user.phone = answers.phone;
  }

  if(answers.address) {
    const { lat, long } = apiGeo(answers.address);

    user.lat = lat;
    user.lon = long;
  }
}

//Type Narrowing - TYype Guard
{
  function isNumber(value: unknown): value is number {
    return typeof value === 'number';
  }


  function isString(value: unknown): value is string {
    return typeof value === 'string';
  }

  const value: unknown = 123;

  //Narrowing down the type of a variable after a type predicate 
  if(isString(value)) {
    value.toUpperCase();
  }

  const value2: unknown = 123;

  if(isNumber(value2)) {
    value2.toFixed(2);
  }
}

//Assertion functions
{ 
  function assertNumber(value: unknown): asserts value is number {
    if(typeof value !== 'number') {
      throw new Error('Value is not a number');
    }
  }

  const value: unknown = 123;

  assertNumber(value);
  //From this point on, value is a number due to the type guard in the assertNumber function
}