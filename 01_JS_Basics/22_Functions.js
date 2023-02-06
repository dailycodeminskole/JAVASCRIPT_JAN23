//////////////////////////////////////
// 04.01.2023 1.00 PM
//////////////////////////////////////
// JS CLASS 
// TOPICS TO BE COVERED
// 👉 FUNCTIONS
//////////////////////////////////////

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

//  Arrow Function
//  new way of writing a function : after year 2015

// odd number tester

let x = 412

let test = function test_odd(x)
{
   if (x%2 == 0){
        console.log("Not Odd number")
    }
    else
    {
        console.log("Odd number")
    }        
}

// test_odd(444)
// test_odd(433)

test(444)
test(411)

let greet  = ()=> console.log("Good Afternoon :")
greet()


let test1 = (num)=>{
    console.log(" The given number is :" , num)
    console.log("Good Job")
}

test1(55)


let test2 = (num)=>{
    if (num%2 == 0){
        console.log("Not Odd number")
    }
    else
    {
        console.log("Odd number")
    }  
}

test2(503)

// printing table of number provided by the user using arrow function

// 7*1
// 7*2
// 7*3
// 7*4

// for (let i = 1 ; i<11 ; i++){
//     console.log(7*i)
// }


let table = ()=>{
    for (let i = 1 ; i<11 ; i++){
        console.log(7*i)
    }
}


table()
table()
table()


let table_user = (num)=>{
    for (let i = 1; i<11 ; i++){
        console.log(num*i)
    }
}

table_user(8)