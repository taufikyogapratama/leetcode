function lengthOfLastWord(s: string): number {
  const cleanString: string = s.trim();
  let arr: string[] = cleanString.split(" ");
  const lastWord: string = arr.pop() as string;
  let arrLastWord: string[] = lastWord.split("");
  return arrLastWord.length;
}

console.log(lengthOfLastWord("Hello World"));
