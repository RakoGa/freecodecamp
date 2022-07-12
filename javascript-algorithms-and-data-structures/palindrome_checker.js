function palindrome(str) {
  str = str.toLowerCase();
  let letters = str.match(/[a-z0-9]/gi);
  let reverse = [...letters].reverse();

  return letters.join("") == reverse.join("");
}
