function searchInsert(nums: number[], target: number): number {
  if (nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    let arr: number[] = nums;
    arr.push(target);
    let sortArr: number[] = arr.sort((a, b) => a - b);
    return sortArr.indexOf(target);
  }
}

console.log(searchInsert([1, 3, 5, 6], 2));
