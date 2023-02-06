//////////////////////////////////////
// 17.12.2022 01.00 PM
//////////////////////////////////////
// JS CLASS @1.00 PM
// TOPICS TO BE COVERED
// 👉 SWITCH CASE
//////////////////////////////////////


// # truthy values

if (0){
    console.log("Hello")
    }


console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(11))
console.log(Boolean(-11))


// Trenary operator

let vote_age = 18
let my_age = 14


// console.log("You are eligible")
// console.log("You are  not eligible")

if (my_age >=vote_age) {
    console.log("You are eligible");
}
else{
    console.log("You are  not eligible")
}


my_age >=vote_age ? console.log("You are eligible") :console.log("You are  not eligible") 


// SWITCH

let city = 'Noida'
switch(city){
    case "indore":
        console.log(" The state is MP")
    case "Noida":
        console.log(" The state is UP")
    case "Bengaluru":
            console.log(" The state is Karnataka")
    case "nagpur":
            console.log(" The state is MH")
}


console.log("******************")
let city_1 = 'LA'
switch(city_1){
    case "indore":
        console.log(" The state is MP")
        break
    case "Noida":
        console.log(" The state is UttarP")
        break
    case "Bengaluru":
            console.log(" The state is Karnataka")
        break
    case "nagpur":
            console.log(" The state is MH")
    default:
        console.log(" Enter proper city . State not fouund")
}


console.log("******************")


// age_citizen < 18 
// NOt Eligible to work
// 18 < age_citizen > 60
// you are eligible to work

// age_citizen > 60
// you are retired
// enjoy free time

let age_citizen = 'xza'


switch(age_citizen){
    case 'one':
        console.log(" NOt Eligible to work")
        break
    case 'two':
        console.log( "Eligible to work")
        break
    case 'three':
        console.log( "you are retired ,enjoy free time")
        break
    default:
        console.log( "Enter proper age")
    
}