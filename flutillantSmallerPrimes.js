const smallerPrimes = (numb) => {
  const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); ++i) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };

  return Array(numb)
    .fill()
    .map((el, i) => (el = i))
    .filter((el, i) => isPrime(el));
};

console.log(smallerPrimes(10));
