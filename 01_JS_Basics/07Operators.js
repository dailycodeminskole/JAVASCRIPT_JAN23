//////////////////////////////////////
// 12.12.2022 01.00 PM
//////////////////////////////////////
// JS CLASS @1.00 PM
// TOPICS TO BE COVERED
// 👉 STRING AND METHODS
// 👉 OPERATORS
//////////////////////////////////////

//  MANIPULATING THE STRING O/P

let a1 = "Version control for the Soft v.3.2"
let a2 = "       JavaScript    "
let a3 = " HomeEdition"

console.log(a3.toUpperCase())
console.log(a3.toLowerCase())
console.log(a1.concat(a2,a3))

console.log(a2.trim())

let mail_id = '123@gmail@com'
console.log(mail_id.split('@'))

console.log(mail_id.startsWith('1023'))
console.log(mail_id.includes('.'))
console.log(mail_id.includes('@'))






// operation b/n number and strings
// number + string ====> string 
// string + number ====> string 
// string + string ====> string 
// number + number ====> number

let x = "Rahul"
let y = "Sr Developer"
let z = 100
let p = 51.55

console.log(p+z) // addn
console.log(p+x) // concat
console.log(x+y) // concat
console.log(p+z+x+y) // addn + concat
console.log(z+x+y+p) // Seq is imp for the operation


//  OPERATORS
//  Arithmetic Operators
//  Assignment Operators
//  Comparison Operators
//  Logical Operators
//  Conditional Operators

//  Arithmetic Operators
console.log(109+10)
console.log(109-10)
console.log(109*10)
console.log(109/10)
console.log(109%10)



//  Assignmnet operators
let z1 = 100
console.log(z1)

// z1 = z1 + 100
// console.log(z1)

z1 +=100 // z1 = z1 + 100
console.log(z1)


// z1 = z1 * 100
// console.log(z1)

z1 *=100
console.log(z1)

//  Comparison Operators


console.log(100>80)
console.log(100<80)
console.log(100>=80)
console.log(100<=80)
// console.log(100=80) // assignment op
console.log(100==80)
console.log(100==100)
console.log(100!=10)
console.log("r" == "R")
console.log(100 == "100") // TRUE
console.log(100 === "100") // for comparing value + type //STRICTLY TRUE
console.log(100 !== "100") // for comparing value + type
console.log('100' !== "100") // for comparing value + type
console.log('100' === "100") // for comparing value + type


//  Logical Operators

//  AND
//  OR
// NOT


// Operator	Description
// &&	    logical and
// ||	    logical or
// !	    logical not



// console.log((7 < 6 && 6 == 6))