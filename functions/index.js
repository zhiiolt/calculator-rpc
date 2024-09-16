/** @format */

// Cloud Function di functions/index.js
const functions = require("firebase-functions");

exports.calculate = functions.https.onCall((data, context) => {
  const { num1, num2, operator } = data;

  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
      break;
    default:
      result = "Invalid operator";
  }

  return { result };
});
