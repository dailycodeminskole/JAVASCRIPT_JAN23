//////////////////////////////////////
// 16.12.2022 01.00 PM
//////////////////////////////////////
// JS CLASS @1.00 PM
// TOPICS TO BE COVERED
// 👉 TERNARY OPERATOR
// 👉 LOOPS
//////////////////////////////////////


// Ternary operator

// Truthy or Falsy value

// Falsy => 0 , null , undefined , NaN , false , 7 != 7 , ''
// Truthy => 'a' , "chinmay010" , -22 , 44 , true , 7 == 7, ' ',[],{}


// # ex 1
let a =500
let b = 300
if (a > b) {
    console.log("A is greater")
}
else{
    console.log("B is grater")
}


//  syntax
// condition ?  case True : case false

a > b ? console.log("A is graeter") : console.log("B s greater")


// example 2

let marks  = 40
let pass_marks = 80


if (marks >=pass_marks){
    console.log("You have passed the Exam")

}
else {
    console.log("You have not passed the Exam")
}


//  syntax
// condition ?  case true : case false

marks >= pass_marks ? console.log("You have passed the Exam") :console.log("You have not passed the Exam")


let age  = 25

if (age>=18){
    console.log("You are Eligible")
}
else{
    console.log("You r not eligible")
}

age >=18 ? console.log("You are Eligible"):console.log("You r not eligible") 



// # truthy values


if (10 > 5){
console.log("Hello")
}


console.log(10>5)
console.log(10<5)

console.log("**********************")
// # boolean value of " " is true
if (" "){
    console.log("Hello")
    }
    
// # boolean value of null is false
if (null){
    console.log("Hello")
    }

if ('Titiksha'){
    console.log("Hello")
    }

if (undefined){
    console.log("Hello")
    }


// Falsy => 0 , null , undefined , NaN , false , 7 != 7 , ''
// Truthy => 'a' , "chinmay010" , -22 , 44 , true , 7 == 7, ' ',[],{}


console.log(Boolean("Titiksha"))
console.log(Boolean(null))

