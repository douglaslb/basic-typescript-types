{
  let a: string = 'Douglas';
  let b = 23;
  let c: unknown = a;
  c = b;
  c = null;
  c = undefined;
  c = {};
  c = [];
  c = c;
  c = void 0;
  c = 100n;

  const x = c;

 const d: string = c // Error: Type 'unknown' is not assignable to type 'string'. Por que o unknown é o tipo pai de todos os tipos, ele não pode ser atribuído a um tipo filho.
}