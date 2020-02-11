// console.log(sum(1, 41))

// function sum (a, b) {
//   return a + b
// }

// console.log(i) // undefined
// var i = 42
// console.log(i)

// console.log(num) // num is not defined, cannot access 'num' before initialization
// const num = 42
// console.log(num)

// Function Expression & Function Declaration
console.log(square(10))

function square (num) { // Function Declaration - всплывает
  return num ** 2
}

// const square = function (num) { // Function Expression - не всплывает
//   return num ** 2
// }

console.log(square(25))
