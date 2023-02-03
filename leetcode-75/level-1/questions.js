// Day 1

// #1480 - Running Sum of 1D Array

function runningSum(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    result.push(0);

    for (let j = 0; j <= i; j++) {
      result[i] += Number(nums[j]);
    }
  }

  return result;
}

// #724 - Find Pivot Index

function pivotIndex(nums) {
  function sumOf(array) {
    return array.reduce((partialSum, element) => partialSum + element, 0);
  }

  let subArray1 = [],
    subArray2 = [];

  for (let i = 0; i < nums.length; i++) {
    subArray1 = nums.slice(0, i);
    subArray2 = nums.slice(i + 1);

    if (sumOf(subArray1) === sumOf(subArray2)) {
      return i;
    }
  }

  return -1;
}
