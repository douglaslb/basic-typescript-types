{
  interface Person {
    name: string;
    readonly age: number;
    naturality?: string; 
  }

  interface Label {
    [name: string]: boolean;
  }

  interface Error {
    readonly [name: string]: boolean;
    number: number 
  }

  interface Multiple {
    titulo: string
    descricao: string
    data: Date
    done: boolean
    [outro: string]: string | Date | boolean
  }


  interface Empty {}
  const empty: Empty = { name: 'João' } // ok
  empty.name // erro

  const objeto: {} = { name: 'João' } // ok
  objeto.toString() // ok
  empty.toString() // ok
}

{
  interface Person {
    name: string
    age: number
    naturality: string
  }

  const pessoa: Person = {
    name: 'João',
    age: 20,
    naturality: 'Brasil'
  }

  function printPerson(pessoa: Person) {
    console.log(pessoa.name)
  }
}