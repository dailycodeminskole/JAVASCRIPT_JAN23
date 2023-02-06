//-------------------------------------
// 06.01.2023 1.00 PM
//-------------------------------------
// JS CLASS 
// TOPICS TO BE COVERED
// 👉 OBJECTS
//-------------------------------------


// Object : data type in JS 
// Object ? : everythin in JS 

// Object :
    // Key has to be unique
    // values can be any value/other data types as values/function

// eg. 1
const ravi1 =  {
    firstName : 'Ravi',
    lastname : 'Koli',
    dob : 1997,
    profession : 'Instructor',
    canVote : true,
}

//  accessing the values

console.log(ravi1.dob) // dot notation
console.log(ravi1['dob']) // bracket notation : this is preferred 
console.log(ravi1.canVote)
console.log(typeof (ravi1)) //object



function Age_calc(dob){
    const age = 2023 - dob
    return age
}

let data = function (dob){
        const age = Age_calc(dob)

        if(age>=18){
            console.log("You are Eligible for Driving")
        }
        else{
            console.log("You are Not Eligible for Driving")

        }
}


// Driver_Eligb(2020)

data(1997)
console.log(Age_calc(1997))



// eg. 2
const ravi2 =  {
    firstName : 'Ravi',
    lastname : 'Koli',
    dob : 1997,
    profession : 'Instructor',
    canVote : true,
    ageCal : function (dob){
        const age = 2023 - dob
        return age
    }
}

console.log(ravi2.ageCal(1997)) //dot notation
console.log(ravi2['ageCal'](1997)) //bracket notation
// console.log(ravi2['ageCal(1997)']) //wrong syntax




// introduced to the concept of 'this
// eg. 3
const ravi3 =  {
    firstName : 'Ravi',
    lastname : 'Koli',
    dob : 1999,
    profession : 'Instructor',
    canVote : true,
    ageCal : function (){
        const age = 2023 - this.dob
        console.log(this)
        return age
        
    }
}


console.log(ravi3.ageCal())
// console.log(ravi3.dob)

console.log(ravi3.ageCal())
console.log(ravi3.ageCal())

console.log(ravi3.ageCal())
