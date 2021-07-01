//--------------------
//Given an array nums of intergers, we need to find the maximum possible sum of elements of the array such that it is divisible by three

//Input : nums = [3, 6, 5, 1, 8]
//Ouput : 18

// const arr = [3, 6, 5, 1, 8]

// function findX(arr) {
//   const total = arr.sort().reduce((x, y) => x + y) % 3

//   return total
// }
// console.log(findX(arr))

/*
//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('')
}

//--------------------

//Create a function with two arguments that will return an array of the first (n) multiples of (x). Assume both the given number and the number of times to count will be positive numbers greater than 0. Return the results as an array (or list in Python, Haskell or Elixir).

function countBy(x, n) {
  let z = []
  for (let i = 1; i <= n; i++) {
    z.push(x * i)
  }
  return z
}
console.log(countBy(1, 10)) //=== [1,2,3,4,5,6,7,8,9,10]
console.log(countBy(2, 5))// === [2,4,6,8,10]


//--------------------

//FILTER UNIQE WORDS IN ARRAY
const findUniqeWordsInArray = words.filter((value, index, self) => {
  return self.indexOf(value) !== index
})

//FILTER DUPLICATE WORDS IN ARRAY
const findUniqeWordsInArray = words.filter((value, index, self) => {
  return self.indexOf(value) === index
})


//--------------------

const tips_everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
console.log(tips_everyNth([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));


*/
