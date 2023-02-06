//////////////////////////////////////
// 21.12.2022 04.00 PM
//////////////////////////////////////
// JS CLASS @4.00 PM
// TOPICS TO BE COVERED
// 👉 LOOPS
//////////////////////////////////////



// -------------------------for loop--------------------

// for (intialExpression;condition;update){
// code
// }

// print from 1 to 10
for (let i = 1;i<=10;i++){
    console.log(i)
}

// print from 10 to 1

for (let i = 10;i>=1;i--){
    console.log(i)
}

console.log("*******2************")
//print table of 2

for (let i =2;i<=20;i= i+2){
    console.log(i)
}

console.log("********5***********")
//print table of 5

for (let i =1;i<=10;i++){
    console.log(5*i)
}

// -------------------------break--------

console.log("********break***********")
// print from 1 to 10
for (let i = 1;i<=10;i++){
    
    if(i==5){
        break
    }
        console.log(i)
}


for (let i = 1;i<=10;i++){
    
    if(i==3){
        break
    }
        console.log("Hello World")
}

// -------------------------continue--------

console.log("********continue***********")
// print from 1 to 10
for (let i = 1;i<=10;i++){

    if(i==5){
        continue
    }
    console.log(i)
}

for (let i = 1;i<=10;i++){
    
    if(i==3){
        continue
    }
        console.log("Hello World")
        console.log(i)

}

// -------------------------- for loop in string----------

let city =  "CHANDIGARH"
for(i=0;i<=9;i++){
    console.log(city[i])
}

let cityP =  "PUNE"
for(i=0;i<=3;i++){
    console.log(cityP[i])
}


let cityX =  "PUNE"
for(i=0;i<=cityX.length-1;i++){
    console.log(cityX[i])
}