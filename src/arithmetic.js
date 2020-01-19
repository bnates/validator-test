'use strict';

const validate = require('./validator.js');

let arithmetic = module.exports = {};

/**
 * Add function: takes a list of numbers and adds them
 * @param numbers
 * @returns {number}
 */
 arithmetic.add = function(...numbers) {
  if (validate.allValuesNumeric(numbers) && validate.hasRightMinimumArgumentCount(numbers, 2)) {
    return numbers.reduce((result, n) => { return result + n }, 0);
  } else {
    return null;
  }
 }

 arithmetic.subtract = function(...numbers) {
  if (validate.allValuesNumeric(numbers) && validate.hasRightMinimumArgumentCount(numbers, 2)) {
    return numbers.reduce((result, n) => { return result && result - n });
  }
 }

