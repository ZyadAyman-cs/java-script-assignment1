// A. Part 1: Coding Questions

// 1.
console.log("1. Convert the string '123' to a number and add 7.");
console.log("123" - 0 + 7);
// or
console.log(Number("123") + 7);

// 2.
console.log(
  "2. Check if the given variable is falsy and return 'Invalid' if it is.",
);
const x = 0;
console.log(x || "Invalid");

// 3.
console.log(
  "3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue",
);
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}

// 4.
console.log(
  "4. Create an array of numbers and return only the even numbers using filter method.",
);
const arr = [1, 2, 3, 4, 5];
console.log(arr.filter((number) => number % 2 === 0));

// 5.
console.log(
  "5. Use the spread operator to merge two arrays, then return the merged array.",
);
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [...a, ...b];
console.log(c);

// 6.
console.log(
  "6. Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday).",
);

let day = 2;
switch (day) {
  case 1:
    console.log("Sunday");
    break;

  case 2:
    console.log("Monday");
    break;

  case 3:
    console.log("Tuesday");
    break;

  case 4:
    console.log("Wednesday");
    break;

  case 5:
    console.log("Thursday");
    break;

  case 6:
    console.log("Friday");
    break;

  case 7:
    console.log("Saturday");
    break;

  default:
    console.log("Invalid day");
}

// 7.
console.log(
  "7. Create an array of strings and return their lengths using map method",
);
const arr2 = ["a", "ab", "abc"];
console.log(arr2.map((str) => str.length));

// 8.
console.log(
  "8. Write a function that checks if a number is divisible by 3 and 5. ",
);

function checkDis3_5(c) {
  if (c % 3 === 0 && c % 5 === 0) return "Divisible by both";
  return "Not divisible by both";
}
console.log(checkDis3_5(15));

// 9.
console.log(
  "9. Write a function using arrow syntax to return the square of a number",
);
const sqr = (d) => {
  return d * d;
};

console.log(sqr(5));

// 10.
console.log(
  "10. Write a function that destructures an object to extract values and returns a formatted string.",
);

const person = {
  name: "John",
  age: 25,
};

function destObject(obj) {
  const { name, age } = obj;
  return `${name} is ${age} years old`;
  //   const values =  Object.values(obj);
  //   return`${values[0]} is ${values[1]} years old`
}
console.log(destObject(person));

// 11.
console.log(
  "11. Write a function that accepts multiple parameters (two or more) and returns their sum.",
);

function sumMul(...arr) {
  let total = 0;
  for (let number of arr) {
    total += number;
  }
  return total;
}
console.log(sumMul(1, 2, 3, 4));

// 12.
console.log(
  '12. Write a function that returns a promise which resolves after 3 seconds with a "Success" message.',
);

function funPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000); //will make the result "success" appear after the next qustion;
  });
}

funPromise().then((result) => {
  console.log(result);
});

// 13.
console.log("13. Write a function to find the largest number in an array. ");

const arr3 = [1, 3, 7, 2, 4];

function findLargest(a) {
  let largest = a[0];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > largest) {
      largest = a[i];
    }
  }
  return largest;
}

console.log(findLargest(arr3));

// 14.
console.log(
  "14. Write a function that takes an object and returns an array containing only its keys.",
);

const person2 = {
  name: "John",
  age: 30,
};

function returnKeys(obj) {
  return Object.keys(obj);
}

console.log(returnKeys(person2));

// 15.
console.log(
  "15. Write a function that splits a string into an array of words based on spaces.",
);

let phrase = "The quick brown fox";
function splitPhrase(str) {
  return str.split(" ");
}
console.log(splitPhrase(phrase));
