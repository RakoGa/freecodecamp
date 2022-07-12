function rot13(str) {
  str = str.split("");
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/i.test(str[i])) {
      let indexInAlphabet = alphabet.indexOf(str[i]);
      let newLetter = (indexInAlphabet + 13) % 26;
      str[i] = alphabet.charAt(newLetter);
    }
  }
  str = str.join("");
  return str;
}
