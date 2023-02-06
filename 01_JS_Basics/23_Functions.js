//////////////////////////////////////
// 05.01.2023 1.00 PM
//////////////////////////////////////
// JS CLASS 
// TOPICS TO BE COVERED
// 👉 FUNCTIONS
//////////////////////////////////////

// Normal vs Arrow functions
    // Arrow functions : One line, few line , OOP :  wont work
    // Normal : for lenghty code , OOP : ok

// Function vs Functins as Expressions

// syntax
// function nameOfTheFun (parametes){
    //code
// }


// paramter vs Argument

// function Test_even(x){
//     if(x%2==0){
//         console.log("The number is Even")
//     }
//     else{
//         console.log("The number is Odd")
//     }
// }


// Test_even(65)
// Test_even(66)
// Test_even(100)
// Test_even(109)
// Test_even(99)

// test(500) //Cannot access 'test' before initialization ,

console.log("---------------------")
let test = function (x){
    if(x%2==0){
        console.log("The number is Even")
    }
    else{
        console.log("The number is Odd")
    }
}

test(199)
test(200)
test("Rahul")


//  function calling   function

// Age Calculator
// ask user to provide dob as i/p
// age as o/p

// DRY
// function Age_calc(dob){
//     const age = 2023 - dob
//     console.log("Your age is :" , age)
// }

// Age_calc(1980)
// Age_calc(1964)
// Age_calc(1947)
// Age_calc(1857)


//Eligibility for  Driving age 
// must be >=18
// 
console.log("*********calling fun before declaration")
Driver_Eligb(1999) // can acces the function  from anywhere 

function Age_calc(dob){
        const age = 2023 - dob
        return age
    }

function Driver_Eligb(dob){
    const age = Age_calc(dob)

    if(age>=18){
        console.log("You are Eligible for Driving")
    }
    else{
        console.log("You are Not Eligible for Driving")

    }
}

Driver_Eligb(2000)
Driver_Eligb(1993)
Driver_Eligb(1970)
Driver_Eligb(2003)
Driver_Eligb(2004)
Driver_Eligb(2020)

// datatype : ARRAY


