//////////////////////////////////////
// 09.12.2022 01.00 PM
//////////////////////////////////////
// JS CLASS @1.00 PM
// TOPICS TO BE COVERED
// 👉 STRING AND METHODS
//////////////////////////////////////

//For  Editing

// length 
// toUpperCase()
// toLowerCase()
// concat()
// trim()
// trimStart()
// trimEnd()
// split()


// replace()
// replaceAll()

let India = "India is my Country  123"
console.log(India.length)
console.log(India.toUpperCase())
console.log(India.toLowerCase())

let name1 = "PrAmOd"
console.log(name1.toLowerCase()) // string is immutable data type

let surname =  " jaiswal"
console.log(name1.concat(surname))

let fn = "     RKS   "
console.log(fn.length)
let trimvalue = fn.trim()
console.log(trimvalue)
console.log(trimvalue.length)

let name2  =  "     YSR   1     "
let name_start_trim = name2.trimStart()
console.log(name_start_trim)


let name_end_trim = name2.trimEnd()
console.log(name_end_trim)


let email1 = "1o23@yaho23ooo.com"

console.log(email1.split("@"))
console.log(email1.split("."))
console.log(email1.split("a"))
console.log(email1.split("o"))

console.log(email1.replace("com" , "org"))
console.log(email1.replace("23" , "33"))
console.log(email1.replaceAll("23" , "33"))


// slice()
// charCodeAt()


// boolean Output
// includes
// startsWith
// endsWith()



