//////////////////////////////////////
// 29.12.2022 1.00 PM
//////////////////////////////////////
// JS CLASS 
// TOPICS TO BE COVERED
// 👉 FUNCTIONS/METHOD
//////////////////////////////////////

// function
    // 1. Built in
    // 2. user defined/custom

// Syntax
// function nameOfFunction () {
//     // function body   
// }

console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
// pURPOSE

// to reduce the daily task into some function
//  write once use many time
// DRY = DO NOT REPEAT YORSELF

// our 1st function to greet
// defined the function

function  greet(){
    console.log("Hello Pune")
}

// call a function

greet()
greet()
greet()

// to print sum of 10+20

// console.log(10+20)

function Add_num(){
    console.log(10+20)
}


// call a function

Add_num()
Add_num()
Add_num()
Add_num()


// add two numbers
// 100+ 100

function Two_Numbers(){
    console.log(100+100)
}

Two_Numbers()
Two_Numbers()
Two_Numbers()

// function with parameter/arguments
// dynamic output

let x = 500
let y = 900
// console.log(x+y)

function Two_calc(p,q){
    console.log(p+q)
}

Two_calc(300,300)
Two_calc(100,100)


function diff_num(x,y){
    console.log(x-y)//order of paramanets are important
}

diff_num(500,100)
diff_num(100,500)


function div(a,b){
    console.log(a/b)
}

div(50,0) //Infinity

// Exercise
// hello('Rahul')
// hello('Rakesh')
// Welcome to Pune Rahul


function greet1(n){
    console.log("Welcome to Pune" ,n)
}

greet1('Rahul')
greet1('Titiksha')
greet1('Sunita')



// Welcome to city Mr./Ms guest

function greet3(city,guest){
    console.log(" Welcome to city",city,  'Mr./Ms', guest)
}

greet3("Pune","Ravi")
greet3("Nagpur","Chinmay")


//  HW
//  You have stood <Rank> in the <Sport name>




