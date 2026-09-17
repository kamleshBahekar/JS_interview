

const fibonacciSequence = (num) => {
  let x = 0;
  let y = 1;

  let fn = x + y;

  while (fn < num) {
    x = y;
    y = fn;
    fn = x + y;
  }

  return fn;
};

console.log(fibonacciSequence(100)); // 144
