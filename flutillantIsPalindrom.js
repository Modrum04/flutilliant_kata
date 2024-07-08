function isPalindrom(string) {
  const countStrChara = string
    .toLowerCase()
    .replaceAll(/[^a-z]/g, "")
    .split("")
    .reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});

  return Object.values(countStrChara).reduce((acc, count) => acc + (count % 2 !== 0 ? 1 : 0), 0) > 1
    ? 0
    : 1;
}
console.log(isPalindrom("nssnoo"));
console.log(isPalindrom("abctpm"));
console.log(isPalindrom("esope reste ici et se repose"));
console.log(isPalindrom("tristan"));
console.log(isPalindrom("ayA(((kk"));
