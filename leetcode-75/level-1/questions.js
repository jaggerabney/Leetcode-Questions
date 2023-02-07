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

// #392 - Is Subsequence

function isSubsequence(s, t) {
  const subseq = s.split("");
  const searchString = t.split("");

  for (char of searchString) {
    if (subseq.length > 0 && char.localeCompare(subseq[0]) === 0) {
      subseq.shift();
    }
  }

  return subseq.length === 0;
}

// Day 3

// #21 - Merge Two Sorted Lists

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  toString() {
    if (this.next) {
      return `${this.val.toString()} ${
        this.next ? this.next.toString() : "undefined"
      }`;
    } else {
      return this.val;
    }
  }
}

function mergeTwoLists(list1, list2) {
  if (list1 === null) {
    return list2;
  } else if (list2 === null) {
    return list1;
  }

  // merge lists together before passing to a helper function
  let current = list1;

  while (current.next !== null) {
    current = current.next;
  }

  current.next = list2;

  return mergeTwoListsHelper(list1);
}

function mergeTwoListsHelper(numbersToSort) {
  // Step 0: check for base case
  if (numbersToSort === null) {
    return null;
  }

  // (helper vars!)
  let current = numbersToSort;
  let min = current.val;
  let index = 0,
    minIndex = 0;

  // Step 1: find min for current list
  while (current !== null) {
    if (current.val < min) {
      min = current.val;
      minIndex = index;
    }

    current = current.next;
    index++;
  }

  // Step 2: cut it out of the list
  // (Cutting the head out is a little different, thus the if block)
  if (minIndex > 0) {
    current = numbersToSort;
    index = 0;

    while (current !== null) {
      if (index === minIndex - 1) {
        current.next = current.next.next;
      }

      current = current.next;
      index++;
    }

    // Step 3: Recurse!
    return new ListNode(min, mergeTwoListsHelper(numbersToSort));
  } else {
    return new ListNode(min, mergeTwoListsHelper(numbersToSort.next));
  }
}

// #206 - Reverse Linked List

function reverseList(head) {
  if (head === null) {
    return null;
  }

  if (head.next === null) {
    return new ListNode(head.val, null);
  }

  let current = head,
    previous = null;

  while (current.next !== null) {
    previous = current;
    current = current.next;
  }

  if (previous) {
    previous.next = null;
  }

  return new ListNode(current.val, reverseList(head));
}

// Day 4

// #876 - Middle of the Linked List

function middleNode(head) {
  // helper vars
  let current = head,
    length = 0,
    middleIndex = 0;

  // Step 1: iterate through linked list to get length
  // (the while loop condition uses current.next so as to be 0-indexed)
  while (current.next != null) {
    length++;

    current = current.next;
  }

  // Step 2: find middleIndex, and round it up if it's not an integer
  middleIndex = length / 2;

  if (middleIndex % 2 !== 0) {
    middleIndex = Math.ceil(middleIndex);
  }

  // Step 3: iterate through the list again and return the node at middleIndex
  current = head;

  while (middleIndex > 0) {
    middleIndex--;

    current = current.next;
  }

  return current;
}

// #142 - Linked List Cycle II

function detectCycle(head) {
  let current = head,
    result = null,
    index = 0,
    nodes = [];

  while (current != null) {
    if (nodes.find((node) => current.next === node)) {
      result = current.next;
      current.next = null;

      return result;
    }

    index++;
    nodes.push(current);
    current = current.next;
  }

  return null;
}
