//////////////////////////////////////
// 13.12.2022 01.00 PM
//////////////////////////////////////
// JS CLASS @1.00 PM
// TOPICS TO BE COVERED
// 👉 OPERATORS
// 👉 LOOP
//////////////////////////////////////


//  Logical Operators

//  AND
//  OR
//  NOT


// Operator	Description
// &&	    logical and
// ||	    logical or
// !	    logical not

//AND
console.log(true && true)
console.log(true && false)
console.log((10 > 6) && (98<5))
console.log((10 > 6) && (98<5) && (44< 87))

//OR
console.log(true || true)
console.log(true || false)
console.log((10 > 6) || (98<5) || (44< 87))

//NOT
console.log(!((10 > 6) || (98<5) || (44< 87)))


// conditional sentences
// conditional loops


// syntax
// if (condition){
//     //code
// }


let marks  = 20
passing = 40
total = 100

if(marks >= 20){
    console.log("You have passed the exam")
}
else {
    console.log("You have not passed the exam")
}



if(marks >= 40){
    console.log("You have passed the exam")
}
else {
    console.log("You have not passed the exam")
}


// marks = 41
// marks = 74
marks = 95

// if(marks > 90){
//     console.log("Passed with A grade")
// }

// if(marks > 75){
//     console.log("Passed with B grade")
// }

// if(marks > 60){
//     console.log("Passed with C grade")
// }

// if(marks >=40){
//     console.log("Passed barely")
// }



// for multiple condition to be checked 

// if (con1){
//     //code
// }

// else if (cond2){
//     //code
// }

// else if(cond3){
//     //code
// }


marks = 65

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
    console.log("Enter Proper number")
}