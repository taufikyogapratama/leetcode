function containsDuplicate(nums: number[]): boolean {
  const withoutDup = new Set(nums);
  return nums.length !== withoutDup.size;
}

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
