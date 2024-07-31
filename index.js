let express = require("express");
let app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

let numbers = [1, 2, 3, 4, 5];
let strings = ["hello", "world", "javascript", "node"];

/*
self note

array.push(value to be pushed ) =>pushes values at last in present array
*/
/*
Question 1: Add a Number to an Array of Numbers

Create an endpoint /numbers/add that adds a number to an array of numbers using array.push() and returns the updated array.

Define a function addNumber to push new number into the existing array.

API Call:

<http://localhost:3000/numbers/add

Expected Output:

[1, 2, 3, 4, 5, 6]
*/
function addNumber(numbers, value) {
  numbers.push(value);
  return numbers;
}
app.get("/numbers/add", (req, res) => {
  let result = addNumber(numbers, 6);
  res.json(result);
});

/*
Question 2: Add a String to an Array of Strings

Create an endpoint /strings/add that adds a string to an array of strings using array.push() and returns the updated array.

Define a function addString to push a new string into the existing array

API Call:

<http://localhost:3000/strings/add

Expected Output:

['hello', 'world', 'javascript', 'node', 'express']
*/

function addString(strings, value) {
  strings.push(value);
  return strings;
}
app.get("/strings/add", (req, res) => {
  let result = addString(strings, "express");
  res.json(result);
});

/*
Question 3 : Sum an Array of Numbers Using for Loop

Create an endpoint /numbers/sum that sums an array of numbers using a for loop and returns the sum.

Define a function sumNumbers to calculate the sum of all the numbers in the array

API Call:

<http://localhost:3000/numbers/sum>

Expected Output:

{
  'sum': 15
}
*/
function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}
app.get("/numbers/sum", (req, res) => {
  let result = sumNumbers(numbers);
  res.json({ sum: result });
});

/*
Question 4 : Find the Maximum Number in an Array

Question Text:

Create an endpoint /numbers/max that finds the maximum number in an array using a for loop and returns the maximum number.

Define a function findMax to find the greatest number in the given array

API Call:

<http://localhost:3000/numbers/max>

Expected Output:

{
  'max': 5
}
*/
function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}
app.get("/numbers/max", (req, res) => {
  let result = findMax(numbers);
  res.json({ max: result });
});
