// 1. Given an array, move the element at index 0 to the last position in the array. Return the modified array.
// Example:
// input: ['This', 'is', 'a', 'split', 'sentence.']
// output: ['is', 'a', 'split', 'sentence.', 'This']

function rearranger(arr) {
  arr.push(arr.shift());
  return arr;
}

// ------------------------------------------

// 2. Given an array of numbers, return the largest number in the array.
// Example:
// input: [6, 4, 8, 33, 42, 10]
// output: 42

function largestNum(arr) {
  let max = arr[0];
  let numOfMaxes = 0;
  arr.forEach(element => {
    max = element > max ? element : max;
  });
  arr.forEach(element => {
    numOfMaxes = max == element ? numOfMaxes + 1 : numOfMaxes;
  });
  let MaxTotal = {};
  MaxTotal[max] = numOfMaxes;
  if (numOfMaxes > 1) {
    return MaxTotal;
  } else {
    return max;
  }
}

// ------------------------------------------

// 3. Given an array of numbers, return an array where every element in the given array is multiplied by the length of the given array.
// Example:
// input:  [4, 2, 1, 7]
// output: [16, 8, 4, 28]

function elemsTimesLength(arr) {
  let tempArr = [];
  arr.forEach(element => {
    tempArr.push(element * arr.length);
  });
  return tempArr;
}

// ------------------------------------------

// 4. Given a multidimensional array, return a single dimension array with all of the primitive data elements within the multidimensional array.
// Example:
// input:  [[['legume'], 3, []], 2, ['tree', [{}, [5]]]]
// output: ['legume', 3, 2, 'tree', 5]
// Primitive data types - https://developer.mozilla.org/en-US/docs/Glossary/Primitive

function arrayFlattener(arr) {
  tempArr = arr.flat(Infinity);
  return tempArr.filter(
    element =>
      typeof element != "array" &&
      typeof element != "function" &&
      typeof element != "object" &&
      element != NaN
  );
  //   let tempArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     let loopArr = arr[i];
  //     if(Array.isArray(loopArr))
  //     for (let j = 0; j < loopArr.length; j++) {
  //       let element = loopArr[j];
  //       tempArr.push(element.valueOf());
  //       debugger;
  //     }
  //   }
  //   return tempArr;
}

// ------------------------------------------

//5. Flights from Boise. Write a function that will use the following data to return the cost of flights from boise to a neighboring city, by default return the standard cost unless firstClass is set to true

let flights = [
  {
    from: "BOI",
    to: "LAX",
    prices: {
      standard: 500,
      firstClass: 2200
    }
  },
  {
    from: "BOI",
    to: "SEA",
    prices: {
      standard: 800,
      firstClass: 1200
    }
  },
  {
    from: "BOI",
    to: "CAN",
    prices: {
      standard: 750,
      firstClass: 6200
    }
  }
];

function flightCost(destination, firstClass) {
  let temp = flights.find(element => element.to == destination.toUpperCase());
  if (firstClass) {
    return temp.prices.firstClass;
  } else {
    return temp.prices.standard;
  }
  //***hint: use the find method***
}

// ------------------------------------------

// 6. Given a number, return the corresponding user object from the staff array that has the given number as the value of their id property. If no user is found, return an object with an error property and value of "No user with that id."
// Example:
// input: 17
// output: {id: 17, name: 'St. MaryLou de la Playa Carmen'}
//Example:
// input: 1000
// output: { error: "No user with that id." }

let staff = [
  { id: 1, name: "Jon" },
  { id: 2, name: "Yuli" },
  { id: 21, name: "Peter" },
  { id: 17, name: "St. MaryLou de la Playa Carmen" },
  { id: 51, name: "Doug" },
  { id: 881, name: "Paul" },
  { id: 0, name: "Jon" },
  { id: 999, name: "Timma" }
];

function findById(identifier) {
  let temp = staff.find(element => element.id == identifier);
  if (temp == undefined) {
    return { error: "No user with that id." };
  } else {
    return temp;
  }
}
findById(999);
// ------------------------------------------

// 7. Write a function that accepts a name argument and will loop over theBand members and return the band member's name and the instrument that he/she plays. Use string concatenation or interpolation to return a sentence with the following structure: "[band-members-name] is in the band and plays the [band-members-instrument]".
// Example:
// input: 'Johnny P'
// output: "Johnny P is in the band and plays the sax"

let theBand = {
  homeCity: "Birmingham",
  members: [
    {
      name: "Johnny P",
      instrument: "sax"
    },
    {
      name: "River",
      instrument: "drums"
    },
    {
      name: "Kris",
      instrument: "guitar"
    }
  ]
};

function bandMemberDetails(n) {
  let temp = theBand.members.find(element =>
    element.name.toLowerCase().includes(n.toLowerCase())
  );
  return `${temp.name} is in the band and plays the ${temp.instrument}`;
}
