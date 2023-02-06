//-------------------------------------
// 07.01.2023 1.00 PM
//-------------------------------------
// JS CLASS 
// TOPICS TO BE COVERED
// 👉 OBJECTS
//-------------------------------------


//              name    age  pin     profession  
//                  0     1   2           3
let person = ['Rakesh' ,35 ,400076 ,'Designer Interior']

console.log(person[0]) //name
console.log(person[3]) //age
console.log(person[1]) //profession



let person2 = [
    'Rakesh',
    400076 ,
    35 ,
    'Designer Interior']

console.log(person2[0])
console.log(person2[1])


let student = {
    fname : 'Rakesh',
    lname : 'Patil',
    pin : 400076,
    age : 18 ,
    marks : [85,45,71,78,96,100,78,45,77],
    result : function()
            { sum = 0
            for (i=0;i<this.marks.length;i++){
                sum = sum + this.marks[i]
            }
    console.log(sum)
    // return sum
}
}


console.log(typeof student)
console.log(student.fname) //rigid
console.log(student['fname']) // more flexible

// for (i=0;i<=10;i++){
//     console.log(i)
// }

// calculating total marks

// marks = [85,45,71,78,96]
// console.log(marks[0]+marks[1]+marks[2]+marks[3]+marks[4])

// sum = 0
// for (i=0;i<=4;i++){
//     sum = sum + marks[i]
// }
// console.log(sum)


// console.log(student['result']())
// console.log(student.result())
student.result()

