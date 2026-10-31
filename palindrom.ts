function isPalindrome(s: string): boolean {
  const strInput: string = s.toLowerCase();
  if (strInput === " ") {
    return true;
  }
  const cleanStrArr: string[] = strInput.split(
    /[\?!,:; .\/@#_'"\\{}\[\]\(\)`-]+/,
  );
  const cleanStrInput: string = cleanStrArr.join("");
  let reverseStr: string[] = [];
  for (let i = cleanStrInput.length - 1; i >= 0; i--) {
    reverseStr.push(cleanStrInput[i]);
  }
  const reverseCleanStr: string = reverseStr.join("");
  if (cleanStrInput === reverseCleanStr) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("Test Aja"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
