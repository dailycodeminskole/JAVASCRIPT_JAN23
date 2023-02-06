//////////////////////////////////////
// 10.12.2022 01.00 PM
//////////////////////////////////////
// JS CLASS @1.00 PM
// TOPICS TO BE COVERED
// 👉 STRING AND METHODS
// 👉 OPERATORS
//////////////////////////////////////

// Editing the strings

let a1 = "Version control for the Soft v.3.2"
let a2 = "       JavaScript    "
let a3 = " HomeEdition"
console.log(a1.length)
console.log(a1.toUpperCase())
console.log(a1.toLowerCase())
console.log(a1.concat(a2))
console.log(a1.concat(a2,a3))
// console.log(concat(a1 ,a2,a3)) error 
console.log(a1+a2+a3)

console.log(a2.trim())
console.log(a2.trimStart())
console.log(a2.trimEnd())


console.log(a1.split('.'))
console.log(a1.split(' '))


// boolean Output

// includes
// startsWith
// endsWith()


console.log(a1.includes('for'))
console.log(a1.includes('@'))

console.log(a1.startsWith("123"))
console.log(a1.startsWith("Version"))

console.log(a1.endsWith("v.3.2"))
console.log(a1.endsWith("3.2"))
console.log(a1.endsWith("v.3"))
console.log(a1.endsWith("Soft"))



a1 = "Version control for the Soft v.3.2.1"
console.log(a1)

// slice


// 0	1	2	3	4	5
// P	Y	T	H	O	N

let n1 = "PYTHON"

console.log(n1[0])
console.log(n1[5])
console.log(n1[3])

// slice(startval,endval) //last value is not included
console.log(n1.slice(0,4)) //PYTH
console.log(n1.slice(0,5)) //PYTHO
console.log(n1.slice(0,6)) //PYTHON
console.log(n1.slice(0,))
console.log(n1.slice(0,6))

console.log(a1.slice(0,26))

//  OPERATORS
//  Arithmetic Operators
//  Assignment Operators
//  Comparison Operators
//  Logical Operators
//  Conditional Operators

//  Arithmetic Operators
console.log(100+100)
console.log(100-100)
console.log(100/100)
console.log(110%100)

//  Assignment Operators
a1 = 100


//  Comparison Operators


let p1 = 51
let p2 = 48

console.log(p1>p2)
console.log(p1<p2)
console.log(p1>=p2)
console.log(p1<=p2)
console.log(p1==p2)
// console.log(p1=p2) // Assignment Operators

console.log(p1!=p2)

// Logical Operators