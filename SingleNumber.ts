function singleNumber(nums: number[]): number {
  let numBucket: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (numBucket.includes(nums[i])) {
      numBucket.splice(numBucket.indexOf(nums[i]), 1);
    } else {
      numBucket.push(nums[i]);
    }
  }
  return numBucket[0];
}

console.log(singleNumber([4, 1, 2, 1, 2]));
