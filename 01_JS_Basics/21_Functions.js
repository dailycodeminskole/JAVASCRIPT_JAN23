//////////////////////////////////////
// 03.01.2023 1.00 PM
//////////////////////////////////////
// JS CLASS 
// TOPICS TO BE COVERED
// 👉 FUNCTIONS
//////////////////////////////////////

// revision


// to check if a number is factor of 5 or not
// test of divisibility
//  45/5 : remainder == 0


let num = 45


console.log(100/10) //quotient
console.log(100%10) //remainder
console.log(100%10==0) //remainder , = assign , == comparison
console.log(100%9==0) //remainder , = assign , == comparison




if (num%5 ==0){
    console.log(" The number is factor of 5")
}
else{
    console.log(" The number is not a  factor of 5")
}


console.log("----------------------")

function tester_5(number){
    if (number%5 ==0){
        console.log(" The number is factor of 5")
    }
    else{
        console.log(" The number is not a  factor of 5")
    } 
}


//  calling the fun

tester_5(106)

//  return

function doub(num){
    // console.log(2*num)
    return 2*num// function will terminate the moment it encounters a return , dead end
    console.log("Attend class regularlt")// this part of code not reachable
}

let ans  = doub(25)

console.log(ans)


// functions as expressions
let ans1 = 500


let data = function doub1(num){
    return 2*num
}

let s = data(100)

console.log(s)
console.log(data(500))




let test1 = function tester_5(number){
    if (number%5 ==0){
        console.log(" The number is factor of 5")
    }
    else{
        console.log(" The number is not a  factor of 5")
    } 
}

test1(44)


// scope of variable
    // Global
    // Local


// Global

console.log("-------------------")
let x = 100

console.log(x)
x = 101
console.log(x)

// block
{
    let y = 500 // local
    console.log(y)
}

// console.log(y)

{
    let y = 900 // local
    console.log(y)
}


console.log("-------------------")

// let z = "Good" // global
// // not a good practice to use a variable with global scope
// // anyone can change the value of the variable
// // difficult to debug

// {
//     let z = "Bad"
//     console.log(z)
// }

// console.log(z)

// z = "V Bad"
// console.log(z)

// {
//     let z = "Ramesh"
//     console.log(z)
// }


// HW
let z = 900
{
    let z = 100
    console.log(z)
    {
        z = 300
        console.log(z)
        z = 333

        {
            z = 500
            console.log(z)
            z = 555
        }
    }
    console.log(z)
}
console.log(z)