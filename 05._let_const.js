// Let
let a = 'Variable a'
let b = 'Variable b'

{
  a = 'New Variable A'
  let b = 'Local Variable B'
  console.log('Scope A:', a)
  console.log('Scope B:', b)
}

console.log('A:', a)
console.log('B:', b)

// Const

// const c = 1
// c = 2 // error - Assignment to constant variable

const array = ['js', 'is', 'awesome']
array.push('!')
array[0] = 'JS'
console.log(array)

// array = '' // error - Assignment to constant variable

const obj = {}
obj.name = 'Masha'
obj.age = 27

console.log(obj)

obj.age = 26
delete obj.name

console.log(obj)

// obj = '' // error - Assignment to constant variable
