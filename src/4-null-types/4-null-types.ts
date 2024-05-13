{
  let name: string | null;

  // Usar o non-null assertion é uma má prática
  console.log(name!.toUpperCase()); 

  function foo(x?: string | null) {
    return x!.toUpperCase()
  }
}