function convertToRoman(num) {
  let result = "";
  let splitNums = Array.from(String(num), Number);
  splitNums.reverse();
  let roman = [["I", "V"], ["X", "L"], ["C", "D"], ["M",""]];

  for (let i = 0; i < splitNums.length; i++) {
    let curr = "";
    if (1 <= splitNums[i] && splitNums[i] <= 3) {
      curr = roman[i][0].repeat(splitNums[i]);
    } else if (splitNums[i] == 4) {
      curr = roman[i][0] + roman[i][1];
    } else if (5 <= splitNums[i] && splitNums[i] <= 8) {
      curr = roman[i][1] + roman[i][0].repeat(splitNums[i] - 5);
    } else if (splitNums[i] == 9) {
      curr = roman[i][0] + roman[i+1][0];
    }
    result =  curr + result;
  }

  return result;  
}
