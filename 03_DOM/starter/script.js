'use strict';

// How to select element in the browser/html

// console.log(document.querySelector('.message'))
// console.log(document.querySelector('.label-score'))

// console.log(document.querySelector('.message').textContent)

// document.querySelector('.message').textContent = 'Correct Number !!'

// document.querySelector('.score').textContent = 100
// // console.log(document.querySelector('.score'))


// console.log(document.querySelector('.score').textContent = 99)
// console.log(document.querySelector('.number').textContent = 10)


// // console.log(document.querySelector)
// document.querySelector('.number').textContent = 20


//  generating random number

let number =  Math.trunc(Math.random()*20) + 1
let score = 20
let Highscore  =  0




// Click event 

document.querySelector('.check').addEventListener('click' ,function (){
    // console.log(document.querySelector('.guess').value)
    const guess  = Number( document.querySelector('.guess').value) //type conversion
    console.log(guess , typeof guess)
    
    // if no input by user

    if (!guess){
        document.querySelector('.message').textContent = 'No Number ! Guess a Number'
    
    }else if (guess === number){
        document.querySelector('.message').textContent = 'Correct Number'
        document.querySelector('.number').textContent = number
        document.querySelector('body').style.backgroundColor = "#00FF00"
        if (score > Highscore){
            Highscore = score
             document.querySelector('.highscore').textContent = Highscore
        }

    }
     else if (guess > number) {
    if (score>1){
        document.querySelector('.message').textContent = 'High Number'
        score--
        document.querySelector('.score').textContent = score
    } else{
        document.querySelector('.message').textContent = 'You Lost'
        document.querySelector('.score').textContent = 0
    }
    
    } else if (guess < number) {
        if (score>1){
            document.querySelector('.message').textContent = 'Low Number'
            score--
            document.querySelector('.score').textContent = score
        }else{
            document.querySelector('.message').textContent = 'You Lost'
            document.querySelector('.score').textContent = 0
        }
    }
}) 
// implement Again button code 
//  restting the initial values

document.querySelector('.again').addEventListener('click',function(){
   score = 20
   document.querySelector('.score').textContent =  score 
   number = Math.trunc(Math.random()*20) + 1
   document.querySelector('.number').textContent = "?"

   document.querySelector('.guess').value = ""
   document.querySelector('.message').textContent = "Start guessing..."
   document.querySelector('body').style.backgroundColor = "#222"

})

