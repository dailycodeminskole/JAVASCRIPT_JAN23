//////////////////////////////////////
// 26.12.2022 12.00 PM
//////////////////////////////////////
// JS CLASS 
// TOPICS TO BE COVERED
// 👉 OBJECTS
//////////////////////////////////////

// OBJECTS
// key: value pair
let person_info = {
    firstname : 'Nikesh',
    lastname : 'Chaudhary',
    age : 35,
    area_pin : [411018,400011]
}
// everything in JS is an object

console.log(typeof(person_info))

// retrieve the data
//  key and  value 


//  dot 
console.log(person_info.firstname)
console.log(person_info.area_pin)

//  bracket
console.log(person_info['firstname'])
console.log(person_info['area_pin'])


// using for loop for reading the data

for(let key in person_info){
    // console.log(key)
     console.log(key,'---' ,person_info[key])
}


// modifying the values


// person_info['area_pin'] = 400076
// console.log(person_info)

person_info['firstname'] = 'Nick'
console.log(person_info)

console.log(person_info['area_pin'])

person_info['area_pin'] = [400076,400011,400022,400033]
console.log(person_info)


person_info['bg'] = {
    father : "F",
    mother  : "M"
}


console.log(person_info)



let students  = [
    {
        firstName:"chinmay",
        lastName:"deshpande",
        age:34,
        city:"pune",
        skills:["python","javascript","cpp","html",'CSS3'],
        marks:80
    },
    {
        firstName:"poorva", // purva
        lastName:"vyas",
        age:29,
        city:"ujjain",
        skills:["python","cpp"],
        marks:79
    },

    {
        firstName:"amol",
        lastName:"rao",
        age:32,
        city:"nagpur",
        skills:["sql","python","css"],
        marks:43
    },

    {
        firstName:"abhisha",
        lastName:"burande",
        age:25,
        city:"nagpur",
        skills:["sql","javascript","tableau","css","python"],
        marks:23
    }

]


students.forEach(function(x){
    if(x.age == 29){
        console.log(x.firstName)
    }
})


students.forEach(function(x){
    if (x.marks == 80){
        console.log(x.firstName)
    }
})
// modifying the values
// add JS to every student

students.forEach(function(x){
    x.skills.push('JS')
})

console.log(students)