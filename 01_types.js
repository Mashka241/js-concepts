// null, undefined, boolean, number, string, object, symbol

// console.log(typeof undefined) // переменная не объявлена
// console.log(typeof 0)
// console.log(typeof true)
// console.log(typeof 'Javascript')
// console.log(typeof Math)
// console.log(typeof Symbol('js'))
// console.log(typeof null) // переменная объявлена, но в ней нет значения
// console.log(typeof NaN)

// Приведение типов
// const language = 'JavaScript'

// if (language) {
//   console.log('The best language is: ', language)
// }

// '', 0, null, undefined, NaN, false => false
// [], {}, function(){} => true
// console.log(Boolean({}))

// Строки и числа
// console.log(1 + '2') // string 12
// console.log('' + 1 + 0) // string 10
// console.log('' - 1 + 0) // number -1
// console.log('3' * '8') // number 24
// console.log(4 + 10 + 'px') // string 14px
// console.log('px' + 5 + 10) // string px510
// console.log('42' - 40) // number 2
// console.log('42px' - 40) // NaN
// console.log(null + 2) // number 2
// console.log(undefined + 2) // NaN

// == vs ===

// console.log(2 == '2') // с приведением типов -> true
// console.log(2 === '2') // без приведения типов -> false
// console.log(undefined == null) // true
// console.log(undefined === null) // false
// console.log('0' == false)

// ------
// console.log('false == ""', false == '')
// console.log('false == []', false == [])
// console.log('false == {}', false == {})

// console.log('"" == 0', '' == 0)
// console.log('"" == []', '' == [])
// console.log('"" == {}', '' == {})

// console.log('0 == []', 0 == [])
// console.log('0 == {}', 0 == {})
// console.log('0 == null', 0 == null)
