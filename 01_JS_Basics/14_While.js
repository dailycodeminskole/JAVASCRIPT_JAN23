//////////////////////////////////////
// 22.12.2022 04.00 PM
//////////////////////////////////////
// JS CLASS @4.00 PM
// TOPICS TO BE COVERED
// 👉 LOOPS
//////////////////////////////////////

// for (intialExpression;condition;update){
// code
// }


// 30 TO 3

// for (let i = 10; i>=1;i--){
//     console.log(3*i)
// }

// while

// while(condition){
// code
// }

let i = 1 ,j=10 

while (i<=j){
    console.log(i)
    i++
}


let sum = 0
// asking only positive numbers
let number = parseInt(prompt("Enter a Positive number"))

while(number>=0){
    sum = sum + number
    number = parseInt(prompt("Enter a Positive number"))
}


console.log(sum)