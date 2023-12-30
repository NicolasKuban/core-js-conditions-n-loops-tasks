/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return String(number).includes('0');
}
// console.log(isPositive(10))

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const temp = a > b ? a : b;
  return temp > c ? temp : c;
}
// console.log(getMaxNumber(-0.1, 0, 0.2))

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }
  if ((queen.x - king.x) ** 2 === (queen.y - king.y) ** 2) {
    return true;
  }
  // const delta = queen.x < queen.y ? queen.x : queen.y;
  // x = queen.x - king.x
  // y = queen.y - king.y
  // for (let i = queen.x - delta; i < 8 - delta; i += 1) {
  //   // for (let j = queen.y - delta; j < 8 - delta; j += 1) {
  //   console.log(i, queen.y - delta + i, '=>', king);
  //   if (i === king.x && queen.y - delta + i === king.y) {
  //     return true;
  //   }
  //   // }
  // }
  // for (let i = queen.x - delta; i < 8 - delta; i += 1) {
  //   // for (let j = 8 - 1 - (queen.y - delta); j < 8 - delta; j += 1) {
  //   console.log(i, 8 - 1 - (queen.y - delta) + i, '=>', king);
  //   if (i === king.x && 8 - 1 - (queen.y - delta) + i === king.y) {
  //     return true;
  //   }
  //   // }
  // }

  return false;
}
// console.log(canQueenCaptureKing({x: 1, y: 1}, {x: 5, y: 5})) // => true
// console.log(canQueenCaptureKing({x: 2, y: 1}, {x: 2, y: 8})) // => true
// console.log(canQueenCaptureKing({x: 1, y: 1}, {x: 2, y: 8})) // => false
// console.log(canQueenCaptureKing({ x: 6, y: 4 }, { x: 3, y: 7 })); // => false

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(/* a, b, c */) {
  throw new Error('Not implemented');
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const e = num % 10;
  const d = (num - e) / 10;
  function getRomanE(numE) {
    if (numE === 1) {
      return 'I';
    }
    if (numE === 2) {
      return 'II';
    }
    if (numE === 3) {
      return 'III';
    }
    if (numE === 4) {
      return 'IV';
    }
    if (numE === 5) {
      return 'V';
    }
    if (numE === 6) {
      return 'VI';
    }
    if (numE === 7) {
      return 'VII';
    }
    if (numE === 8) {
      return 'VIII';
    }
    if (numE === 9) {
      return 'IX';
    }
    if (numE === 0) {
      return '';
    }
    return '';
  }
  function getRomanD(numD) {
    if (numD === 1) {
      return 'X';
    }
    if (numD === 2) {
      return 'XX';
    }
    if (numD === 3) {
      return 'XXX';
    }
    return '';
  }
  return getRomanD(d) + getRomanE(e);
}
// console.log(convertToRomanNumerals(26))

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  function getString(symbol) {
    switch (symbol) {
      case '1':
        return 'one';
      case '2':
        return 'two';
      case '3':
        return 'three';
      case '4':
        return 'four';
      case '5':
        return 'five';
      case '6':
        return 'six';
      case '7':
        return 'seven';
      case '8':
        return 'eight';
      case '9':
        return 'nine';
      case '0':
        return 'zero';
      case '.':
      case ',':
        return 'point';
      case '-':
        return 'minus';
      default:
        return '+++';
    }
  }
  for (let i = 0; i < numberStr.length; i += 1) {
    result += i ? ` ${getString(numberStr[i])}` : `${getString(numberStr[i])}`;
  }
  return result;
}
// console.log(convertNumberToString('1950.2'));

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
// console.log(isPalindrome('0123210'))

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}
// console.log(getIndexOf('qwerty', 'e'))

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let temp = num;
  while (temp) {
    if (temp % 10 === digit) {
      return true;
    }
    temp = Math.floor(temp / 10);
  }
  return false;
}
// console.log(isContainNumber(1234560, 2))

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length < 3) {
    return -1;
  }
  function sumArrLeft(index) {
    let total = 0;
    for (let i = 0; i < index; i += 1) {
      total += arr[i];
    }
    return total;
  }
  function sumArrRight(index) {
    let total = 0;
    for (let i = index + 1; i < arr.length; i += 1) {
      total += arr[i];
    }
    return total;
  }
  for (let i = 1; i < arr.length - 1; i += 1) {
    if (sumArrLeft(i) === sumArrRight(i)) {
      return i;
    }
  }
  return -1;
}
// const utility = require('../extensions/utility');
// const length = 9;
//       for (let i = 0; i < 5; i += 1) {
//         const balanced = utility.getBalancedArrayUtil(length * (i + 1));
//         console.log(balanced.arr)
//         console.log(getBalanceIndex(balanced.arr), "=>", balanced.balanceIndex);
//       }
// console.log(getBalanceIndex([8, 7, 9, -2, 10, 8, -1, -10, 10])); // 2
// console.log(getBalanceIndex([10, 1, 3, -8, -6, 4, 10, -3, 9])); // 3
// console.log(getBalanceIndex([8, 5, 4, 0, 10, 10, 1, 10, 4, -5, -4, 2, -3, 1, -1, 8, -3, 38])); // 13
// console.log(getBalanceIndex([-9, -10, -7, 9, -8, -10, -1, -9, -3, 3, 3, 4, 6, -4, -1, 2, -5, 8, 8, -5, -10, 2, -8, 10, 6, -3, -32])); // 24
// console.log(getBalanceIndex([6, 1, 5, 10, 1, -3, 6, 9, -4, -8, 2, 4, -8, 4, 7, 8, -1, 5, 0, 8, 1, -9, 7, 7, -5, 8, 2, 7, -4, -4, -4, -3, -4, 0, -5, -27])); // 2
// console.log(getBalanceIndex([-2, -9, 0, 6, 6, -3, 1, 7, -6, 10, 6, 1, -7, -4, 7, -6, 2, -1, -6, -1, 0, -6, 3, -2, -2, -5, -5, -8, -2, 0, -6, 3, 4, 8, -6, -5, 9, -10, 9, 0, -8, -1, -10, -5, 4])); // 27

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = Array(size);
  for (let i = 0; i < arr.length; i += 1) {
    const subArr = Array(size);
    for (let j = 0; j < subArr.length; j += 1) {
      subArr[j] = 0;
    }
    arr[i] = subArr;
  }
  let deltaX = 0;
  let deltaY = 1;
  let x = 0;
  let y = 0;
  for (let i = 1; i < size ** 2 + 1; i += 1) {
    arr[x][y] = i;
    const nextX = x + deltaX;
    const nextY = y + deltaY;
    if (
      nextX >= 0 &&
      nextX < size &&
      nextY >= 0 &&
      nextY < size &&
      !arr[nextX][nextY]
    ) {
      x = nextX;
      y = nextY;
    } else {
      const temp = -deltaX;
      deltaX = deltaY;
      deltaY = temp;
      x += deltaX;
      y += deltaY;
    }
  }
  return arr;
}
// a = getSpiralMatrix(4);
// for (element of a) {
//   console.log(element);
// }

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(arr) {
  const matrix = arr;
  const n = matrix.length;
  for (let i = 0; i < Math.floor(n / 2); i += 1) {
    for (let j = i; j < n - i - 1; j += 1) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[n - j - 1][i];
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
      matrix[j][n - i - 1] = temp;
    }
  }
}
// console.log(i,j, "==", matrix[i][j])
// console.log(n - j - 1 , i, "==", matrix[n - j - 1 ][i])
// console.log(n - i - 1 , n - j - 1, "==", matrix[n - i - 1][n - j - 1])
// console.log(j, n - i - 1, "==", matrix[j][n - i - 1])

// matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// // a = rotateMatrix(matrix);
// rotateMatrix(matrix);

// // console.log(matrix)
// for (element of matrix) {
//   console.log(element);
// }

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arrs) {
  const arr = arrs;
  function findBase(start, end) {
    const base = arr[start];
    for (let cursor = start + 1; cursor <= end; cursor += 1) {
      if (arr[cursor] > base) {
        return cursor;
      }
      if (arr[cursor] < base) {
        return start;
      }
    }
    return -1;
  }
  function breakArray(start, end, base) {
    let cursorLeft = start;
    let cursorRight = end;
    while (cursorLeft < cursorRight) {
      if (cursorLeft > cursorRight) {
        break;
      }
      const temp = arr[cursorLeft];
      arr[cursorLeft] = arr[cursorRight];
      arr[cursorRight] = temp;
      while (arr[cursorLeft] < base) {
        cursorLeft += 1;
      }
      while (arr[cursorRight] >= base) {
        cursorRight -= 1;
      }
    }
    return cursorLeft;
  }

  function quickSort(start, end) {
    const index = findBase(start, end);
    if (index !== -1) {
      const base = arr[index];
      const cursor = breakArray(start, end, base);
      quickSort(start, cursor - 1);
      quickSort(cursor, end);
    }
  }

  quickSort(0, arr.length - 1);
}

// a = [2, 9, 5]
// a = [2, 9, 5, 9]
// a = [-2, 9, 5, -3]
// a = [-72, -69, 85, 37, -5, 47, 92, -41, -89, -32];
// [  -89,  -72,  -69,  -41,  -32,  -5,  37,  47,  85,  92]
// sortByAsc(a);
// console.log(a);

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  function shuffle(strOther) {
    let left = strOther[0];
    let right = '';
    for (let i = 1; i < strOther.length - 1; i += 2) {
      right += strOther[i];
      left += strOther[i + 1];
    }
    right = strOther.length % 2 ? right : right + strOther[strOther.length - 1];
    return left + right;
  }
  let result = str;
  for (let i = 0; i < iterations; i += 1) {
    result = shuffle(result);
  }
  return result;
}

// a = '012345'
// a = 'qwerty'
// console.log(shuffleChar(a, 2))

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arr = [];
  let i = 0;
  let temp = number;

  function nextDigital(arrOther, value) {
    let result = 0;
    for (let j = 0; j < arrOther.length; j += 1) {
      result += 1;
      if (value < arrOther[j]) {
        result -= 1
        break;
      }
    }
    return result;
  }
  while (temp) {
    i += 1;
    if (i > 20) {
      console.log('ERROR');
      break;
    }
    const ostatok = temp % 10;
    temp = Math.floor(temp / 10);
    arr.push(ostatok);
    arr.sort((a, b) => a - b);
    let hasMore = nextDigital(arr, ostatok);
    console.log('===', hasMore);
    if (hasMore < arr.length) {
      if (arr.length === 2) {
        hasMore += 1
      }
      [arr[0], arr[hasMore - 1]] = [arr[hasMore - 1], arr[0]];
      temp *= 10 ** arr.length;
      for (let j = 0; j < arr.length; j += 1) {
        temp += arr[j] * 10 ** (arr.length - 1 - j);
      }
      return temp;
    }
  }
  console.log(arr);
}

const a = 12345;
console.log(getNearestBigger(a));

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
