{
  let a: string = 'Douglas';
  let b = 23;
  let c: never = a;
  c = b;
  c = null;
  c = undefined;
  c = {};
  c = [];
  c = c;
  c = void 0;
  c = 100n;

  const x = c;

  const d: string = c 
}