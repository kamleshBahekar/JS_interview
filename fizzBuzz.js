const fizzBuzz = (n) => {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i.toString());
    }
  }

  return arr;
};
const fizzBuzz1 = (n) => {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    let output = '';

    if (i % 3 === 0) {
      output += 'Fizz';
    }

    if (i % 5 === 0) {
      output += 'Buzz';
    }

    arr.push(output || i.toString());
  }

  return arr;
};

console.log(fizzBuzz1(15));

console.log(fizzBuzz(15));
