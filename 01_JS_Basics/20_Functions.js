//////////////////////////////////////
// 02.01.2023 1.00 PM
//////////////////////////////////////
// JS CLASS 
// TOPICS TO BE COVERED
// 👉 FUNCTIONS
//////////////////////////////////////

// Syntax
// function nameOfFunction (parameters) {
//     // function body   
// }

// function
  // without parameters -- not useful for resue
  // with parameters -- can be reused


// function that returns


// function Two_calc(p,q){
//   console.log(p+q)
// }


// Two_calc(10,58)

// d = Two_calc(10,58)

// console.log(2*d)

function Two_calc(p,q){
  return p+q
}


//  calling the fun
let ans = Two_calc(77,11)
console.log(ans)
console.log(ans*2)
console.log(ans/2)
console.log(ans**3) // taking squre


// calculate the square

function sq(num){
  return num*num
}

let value = sq(10)
console.log(value)
console.log(sq(10))
sq(10)


// chceking odd numbers

function tester(num){
if(num%2 == 0){
  console.log("The number is Even")
}
else{
  console.log("The number is Odd")
}
}

tester(403)
tester(401)
tester(402)

// table of 10
function table(num){

  for(j = 1; j<=10; j++){
    console.log(num*j)
  }
}

table(8)
table(18)

// HW
// teter for checking div by 3 