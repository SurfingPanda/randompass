const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const generate = document.querySelector('.btnGenerate')
let passwordOne = document.querySelector('.pass1')
let passwordTwo = document.querySelector('.pass2')
const constraint = 8;

generate.addEventListener('click', function(){

  let firstPassword = ""
  let secondPassword = ""

  for(let i = 0; i < constraint; i++){
    
      firstPassword += characters[generateRandomIndex()]
      secondPassword += characters[generateRandomIndex()]
  }
    passwordOne.textContent = firstPassword
    passwordTwo.textContent = secondPassword
})

function generateRandomIndex(){
  return Math.floor(Math.random() * characters.length)
}

function copyFirstPassword(){
  const content = passwordOne.textContent
  navigator.clipboard.writeText(content)
  const copied = navigator.clipboard.readText()
}

function copySecondPassword(){
  const content = passwordTwo.textContent
  navigator.clipboard.writeText(content)
  const copied = navigator.clipboard.readText()
}