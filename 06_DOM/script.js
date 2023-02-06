// console.log(document.querySelector('ul'))
let ulList = document.querySelector('ul')
let buttonOne = document.querySelector('#one')
let input = document.querySelector('input')

//adding event listner to the add button and input box

buttonOne.addEventListener('click',function(){
let text  = input.value
let newLi = document.createElement('li')
newLi.textContent = text
ulList.appendChild(newLi)
input.value = " "
})
 