const sumOfDigit = (num) => {
  do {
    // newNum is the sum of digit
    let newNum = 0;

    // convert digit of number into array, each element of array contain one digit
    // once get the array of digit, parse digit to number then add the newNum up to digit
    let arr = String(num)
      .split("")
      .map((digit) => {
        newNum = newNum + Number(digit);
      });
    
    // update num
    num = newNum;
  } while (num > 9);

  return num;
};

console.log(sumOfDigit(145));
