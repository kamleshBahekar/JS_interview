const primeOrComposite = (num) => {
  let isPrimeNumber = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrimeNumber = false;
      return `${num} is composite number`;
    }
  }

  if (isPrimeNumber) {
    return `${num} is prime number`;
  }
};

console.log(primeOrComposite(7));