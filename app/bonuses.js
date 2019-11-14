// 1. Write a function that will iterate over an alphabetized string and return the
// missing letter.If there isn't a missing letter, return "no missing letters".
//Example:
// input: 'qrsuv'
// output: 't'
// Example:
// input: 'cdefghi'
// output: 'no missing letters'
// Hint: Utilize the string prototype method charCodeAt and generic method fromCharCode

function letterChecker(str) {
  let missingLetter = "";
  let prevCode = 0;
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (i != 0) {
      if (code == prevCode + 1) {
      } else {
        missingLetter = String.fromCharCode(prevCode + 1);
      }
    }
    prevCode = code;
  }
  if (!missingLetter) {
    return "no missing letters";
  } else {
    return missingLetter;
  }
}

// ------------------------------------------

// 2. Given an array of numbers and a target number, determine if any two numbers in the
// array can add up to the value of the target number.Return true or false
// Example:
// input: [2,4,6,3], 7
// output: true (because 4+3)

function sumEqualsTarget(arr, target) {
  let tempDifference = 0;
  for (let i = 0; i < arr.length; i++) {
    tempDifference = target - arr[i];
    for (let j = i; j < arr.length; j++) {
      if (tempDifference == arr[j]) {
        return true;
      }
    }
  }
  return false;
}

// ------------------------------------------

// 3. Given an array of numbers, sort the array such that all even numbers don't change
// their position but all odd numbers are sorted in ascending order.Return the sorted array.
// Example:
// input:  [2, 9, 4, 3, 6, 6, 1, 5, 8]
// output: [2, 1, 4, 3, 6, 6, 5, 9, 8]

function oddAscender(arr) {
  let changedArray = [];
  let j = 0;
  let oddNumbers = arr.filter(element => {
    return element % 2 == 1;
  });
  oddNumbers.sort(function(a, b) {
    return a - b;
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      changedArray.push(oddNumbers[j]);
      j++;
    } else {
      changedArray.push(arr[i]);
    }
  }
  return changedArray;
}
