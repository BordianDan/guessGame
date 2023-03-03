document.body.style.backgroundColor = 'gray'

let input = document.querySelector('#number')
input.disabled = true

let submit = document.querySelector('button')
submit.addEventListener('click', play)

let message = document.querySelector('.message')
message.style.backgroundColor = 'red'

let chance = document.querySelector('.chance')
chance.innerText = 'Tryes: 10'

let replay = document.querySelector('.info')
let replayMessage = document.createElement('p')
replay.appendChild(replayMessage)

let randomNumber = Math.floor((Math.random() * 100) + 1);
console.log(randomNumber);
let tryes = 9;

function play() {
  submit.removeEventListener('click',newGame)
  submit.addEventListener('click', guessCheck)
  submit.innerText = 'Guess';
  input.disabled = false
  input.focus()
  guessCheck
}

function guessCheck() {
  submit.removeEventListener('click', play)
      
  let guess = Number(document.querySelector('#number').value)
  chance.innerText = `Tryes: ${tryes}`
    
  if (!isFinite(guess)) {
    message.innerText = 'Number please!!!';
  }

  if (guess == randomNumber) {
   message.innerText = 'You win';
   gameOver()
   message.style.backgroundColor = 'green'
  } else if (tryes === 0) {
    message.innerText = 'You lost'
    gameOver()
 } else if  (guess < randomNumber) {
    message.innerText = 'Wrong, bigger number'
   } else if (guess > randomNumber) {
    message.innerText = 'Wrong, smaller number'
   }
   tryes--
   input.value = '';
   input.focus()
}

function gameOver() {
  input.disabled = true
  submit.removeEventListener('click', guessCheck)
  submit.addEventListener('click', newGame)
  submit.innerText = 'Play'
  replayMessage.innerText = "Wanna Try again?"
  replayMessage.style.color = 'blue'
  }

function newGame() {
  message.innerText = ''
  input.disabled = false
  tryes = 9
  chance.innerText = 'Tryes: 10'
  message.style.backgroundColor = 'red'
  replayMessage.innerText = ""
  randomNumber = Math.floor((Math.random() * 100) + 1);
  console.log(randomNumber);
  play()
}



