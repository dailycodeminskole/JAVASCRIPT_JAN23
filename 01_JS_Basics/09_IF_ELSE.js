//////////////////////////////////////
// 14.12.2022 01.00 PM
//////////////////////////////////////
// JS CLASS @1.00 PM
// TOPICS TO BE COVERED
// 👉 FLOW CONTROL
//////////////////////////////////////

/*
if 
if...else 
if...else if...else 

*/



// revision

console.log(100 == 100) // TRUE
console.log(100 == '100') // TRUE
console.log(100 === '100') // Strictly comparison


console.log(true)
console.log(false)
console.log(100> 10)
console.log(100< 10)

// con1 , cond2 , cond 3 > conclusion ??

marks1 = 35
marks2 = 75
// min_marks = 40


console.log(marks1>=40 && marks2>=40) // AND
console.log(marks1>=40 || marks2>=40) // OR
console.log(!(marks1>=40 || marks2>=40)) //NOT will neagte the o/p

// Flow control statements
// syntax
// if (condition){
//     //code
// }


let age = 19
if (age >= 18){
    console.log("You are eligible for driving")
}

age = 7
if (age >= 18){
    console.log("You are eligible for driving")
}
else{
    console.log("You are not eligible for driving")
}



marks = 95

if(marks > 90){
    console.log("Passed with A grade")
}

if(marks > 75){
    console.log("Passed with B grade")
}

if(marks > 60){
    console.log("Passed with C grade")
}

if(marks >=40){
    console.log("Passed barely")
}


marks = 95

if(marks > 90){
    console.log("Passed with A grade")
}

else if(marks > 75){
    console.log("Passed with B grade")
}

else if(marks > 60){
        console.log("Passed with C grade")
}




marks = -1

if(marks > 90){
    console.log("Passed with A grade")
}

else if(marks > 75){
    console.log("Passed with B grade")
}

else if(marks > 60){
        console.log("Passed with C grade")
}
else {
    console.log("Enter proper marks or  You were absent")
}

