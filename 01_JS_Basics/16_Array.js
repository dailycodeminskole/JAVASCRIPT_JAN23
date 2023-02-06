//////////////////////////////////////
// 24.12.2022 07.00 PM
//////////////////////////////////////
// JS CLASS 
// TOPICS TO BE COVERED
// 👉 ARRAYS/OBJECTS
//////////////////////////////////////
let arr1 = ['a','b','c','d','e']
console.log(typeof(arr1))
console.log(arr1)
// Creating an Array

let arr2 =  new Array('a','b','c','d','e')
console.log(arr2)

// Accessing/retrieving  Array Elements

//    0     1   2   3     4
// [ 'a', 'b', 'c', 'd', 'e' ]

console.log(arr1[0])
console.log(arr1[3])
console.log(arr1[4])
console.log(arr1[1])



// updating/replacing
arr1[0] = "aa"
console.log(arr1)


// adding 

arr1.push("f") // add one elment at the end 
console.log(arr1)

arr1.unshift("zz") //add one elment at the start 
console.log(arr1)

arr1.splice(1,3,"cc","dd","ee")
console.log(arr1)

// removing/deleting

arr1.pop() //removing the last element
console.log(arr1)

arr1.pop() //removing the last element
console.log(arr1)

arr1.pop() //removing the last element
console.log(arr1)


arr1.shift() //removing the first element
console.log(arr1)

arr1.shift() //removing the first element
console.log(arr1)

// OBJECTS
// key: value pair
let person_info = {
    firstname : 'Nikesh',
    lastname : 'Chaudhary',
    age : 35,
    area_pin : 411018
}


// Accessing/retrieving  objects


console.log(person_info.firstname)
console.log(person_info.lastname)
console.log(person_info.area_pin)

