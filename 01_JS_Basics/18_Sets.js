//////////////////////////////////////
// 27.12.2022 1.00 PM
//////////////////////////////////////
// JS CLASS 
// TOPICS TO BE COVERED
// 👉 SETS
//////////////////////////////////////



// OBJECTS
// key: value pair
let person_info = {
    firstname : 'Nikesh',
    lastname : 'Chaudhary',
    age : 35,
    area_pin : [411018,400011]
}

// key has to be unique
person_info['firstname'] = 'SUmit'
console.log(person_info)


// sets
// collection of values
// unique

let arr1 = ['a','e','i','o','u']

let set_a = new Set(['a','e','i','o','u'])
// let set_a = Set(arr1)

console.log(set_a)

let set_name = new Set("RAHUL")
console.log(set_name)

let set_nitin = new Set("NITIN")
console.log(set_nitin)

let set_aa = new Set("AAAAAAAAAAAA")
console.log(set_aa)
console.log(typeof set_aa)

let set_blank = new Set("")
console.log(set_blank)
console.log(typeof set_blank)

let set_space = new Set(" ")
console.log(set_space)
console.log(typeof set_space)


// Methods of Sets

// add
set_a.add("z")
console.log(set_a)

set_a.add("a") // no duplicates allowed
console.log(set_a)

set_a.add("PLUTO")
console.log(set_a)

set_a.add("pluto")
console.log(set_a)


// size

console.log(set_a.size)
console.log(set_name.size)

// has()

console.log(set_a.has('z')) // return boolean o/p
console.log(set_name.has('z'))
console.log(set_a.has('pluto'))

// delete
console.log(set_a)

set_a.delete('z')// not return

console.log(set_a)


// clear() , will remove all the values
console.log(set_a)
set_a.clear()
console.log(set_a)


// HW 
set_a.add("111111")
console.log(set_a)

set_a.add(111111)
console.log(set_a)