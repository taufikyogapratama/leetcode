function plusOne(digits: number[]): number[] {
  let strArr: string = "";
  digits.forEach((item) => {
    strArr += String(item);
  });
  const strArrPlusOne: string = String(BigInt(strArr) + 1n);
  let numArr: number[] = [];
  for (let i = 0; i < strArrPlusOne.length; i++) {
    numArr.push(Number(strArrPlusOne[i]));
  }
  return numArr;
}

console.log(plusOne([4, 3, 2, 2]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
