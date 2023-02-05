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

// Day 2

// #205 - Isomorphic Strings

function isIsomorphic(s, t) {
  const sChars = s.split("");
  const tChars = t.split("");
  const dict = new Map();
  let sChar = "",
    tChar = "",
    currentResult = "";

  // create a map between the chars of s and t
  for (let i = 0; i < sChars.length; i++) {
    sChar = sChars[i];
    tChar = tChars[i];

    if (!dict.has(sChar)) {
      if (currentResult.includes(tChar)) {
        return false;
      }

      dict.set(sChar, tChar);
      currentResult += tChar;
    }
  }

  const result = sChars.map((char) => dict.get(char)).join("");

  console.log(result, t);

  return result.localeCompare(t) === 0;
}
