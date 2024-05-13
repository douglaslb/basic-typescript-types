{
  interface Person {
    name: string
  }

  interface Person {
    age: number
  }

  const person: Person = { name: 'John', age: 30 }

  type Car = {
    year: number
  }

  type Car = {
    model: string
  }
}