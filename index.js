let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]
let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")
let numbersEl = document.getElementById("numbers")
let betAmountEl = document.getElementById("bet-amount")
let fundsEl = document.getElementById("funds")
let generateEl = document.getElementById("generateBtn")
let startEl = document.getElementById("fightBtn")
let resetBtnEl = document.getElementById("reset-btn")
let betSizeEl = document.getElementById("bet-size-el")
let fighterOneEmoji
let fighterTwoEmoji
let fighterOneNumbers = ""
let fighterTwoNumbers = "" 
let emojiOnePicked = false
let emojiTwoPicked = false
let betAmount = 0
let funds = 5000
let bet10 = false
let bet20 = false
let bet50 = false
let bet100 = false
let bet500 = false

startEl.style.display = "none";
resetBtnEl.style.display = "none";
betSizeEl.style.display = "none";
fundsEl.style.display = "none";
betAmountEl.style.display = "none";
fundsEl.textContent = "Account Funds: $" + funds

function updateBet10() {
    betAmount = 10
    betAmountEl.textContent = "Bet Amount: " + betAmount
    numbersEl.textContent = "Only $10, pussy."
    startEl.style.display = "block"
}

function updateBet20() {
    betAmount = 20
    betAmountEl.textContent = "Bet Amount: " + betAmount
    numbersEl.textContent = "$20 is weak AF IMO"
    startEl.style.display = "block"
}
function updateBet50() {
    betAmount = 50
    betAmountEl.textContent = "Bet Amount: " + betAmount
    numbersEl.textContent = "$" + "50 is.. ok I guess"
    startEl.style.display = "block"
}
function updateBet100() {
    betAmount = 100
    betAmountEl.textContent = "Bet Amount: " + betAmount
    numbersEl.textContent = "$100 is a bit more like it!"
    startEl.style.display = "block"
}
function updateBet500() {
    betAmount= 500
    betAmountEl.textContent = "Bet Amount: " + betAmount
    numbersEl.textContent = "You absoutle fucking degen"
    startEl.style.display = "block"
}


function generateFighters() {
    generateEl.style.display = "none";
  let randomIndex1 = Math.floor(Math.random() * fighters.length )
  let randomIndex2 = Math.floor(Math.random() * fighters.length )
  fighterOneEmoji = fighters[randomIndex1]
  fighterTwoEmoji = fighters[randomIndex2]
  stageEl.innerHTML = `<span id="fighterOneEmoji" class="fightersEmojis">${fighterOneEmoji}</span> vs <span id="fighterTwoEmoji" class="fightersEmojis">${fighterTwoEmoji}</span>`
  numbersEl.textContent = "Please pick your fighter!"
  document.getElementById("fighterOneEmoji").addEventListener("click", function() {
    emojiOnePicked = true 
    emojiTwoPicked - false
    stageEl.textContent = "You picked: " +  fighterOneEmoji
    numbersEl.textContent = "Please pick a bet amount"
    betSizeEl.style.display = "block";
    betSizeEl.style.display = "flex";
    fundsEl.style.display = "block";
    betAmountEl.style.display = "block";


  })
  document.getElementById("fighterTwoEmoji").addEventListener("click", function() {
    emojiTwoPicked = true 
    emojiOnePicked = false
    stageEl.textContent = "You picked: " +  fighterTwoEmoji 
    numbersEl.textContent = "Please pick a bet amount"
    betSizeEl.style.display = "block";
    betSizeEl.style.display = "flex";
    fundsEl.style.display = "block";
    betAmountEl.style.display = "block";
  })
}

function getRandomNumbers() {
  let randomNumberOne = Math.floor(Math.random() * 100 ) + 1
  let randomNumberTwo = Math.floor(Math.random() * 100 ) + 1
  fighterOneNumbers = randomNumberOne
  fighterTwoNumbers = randomNumberTwo
}

function startGame() {
  getRandomNumbers()

if (betAmount === 0) {
    stageEl.textContent = "You must pick a bet amount"
    numbersEl.style.display = "none";
} else if (emojiOnePicked === false && emojiTwoPicked === false) {
    stageEl.textContent = "Please pick a fighter!"
} else {
    if (fighterOneNumbers > fighterTwoNumbers && emojiOnePicked === true) {
        stageEl.textContent = fighterOneEmoji + " You won!"
        let earnings = betAmount * 2
        let earningsReturn = funds += earnings
        fundsEl.textContent = "Account Funds: $" + earningsReturn
        numbersEl.textContent = "Scores: " + fighterOneEmoji + ": " + fighterOneNumbers + " VS " + fighterTwoEmoji + ": " + fighterTwoNumbers
        numbersEl.style.display = "block";
        resetBtnEl.style.display = "block";
        betAmountEl.style.display = "none";
        betSizeEl.style.display = "none";
        startEl.style.display = "none";
        fundsEl.style.display ="flex-end";
        fundsEl.style.display = "flex";


      } else if (fighterOneNumbers < fighterTwoNumbers && emojiOnePicked === true) {
        stageEl.textContent =" You lost to a " + fighterTwoEmoji
        let earnings = betAmount * 2
        let earningsReturn = funds -= earnings
        fundsEl.textContent = "Account Funds: $" + earningsReturn
        numbersEl.textContent = "Scores: " + fighterOneEmoji + ": " + fighterOneNumbers + " VS " + fighterTwoEmoji + ": " + fighterTwoNumbers
        resetBtnEl.style.display = "block";
        numbersEl.style.display = "block";
        betAmountEl.style.display = "none";
        betSizeEl.style.display = "none";
        startEl.style.display = "none";
        fundsEl.style.display = "flex";

      }  else if (fighterOneNumbers < fighterTwoNumbers && emojiTwoPicked === true ) {
        let earnings = betAmount * 2
        let earningsReturn = funds += earnings
        fundsEl.textContent = "Account Funds: $" + earningsReturn
        stageEl.textContent = "You won!: " + fighterTwoEmoji
        numbersEl.textContent = "Scores: " + fighterOneEmoji + ": " + fighterOneNumbers + " VS " + fighterTwoEmoji + ": " + fighterTwoNumbers
        resetBtnEl.style.display = "block";
        betAmountEl.style.display = "none";
        betSizeEl.style.display = "none";
        startEl.style.display = "none";
        fundsEl.style.display = "flex";


      }  else if (fighterOneNumbers > fighterTwoNumbers && emojiTwoPicked === false) {
        stageEl.textContent = " You lost to a " + fighterTwoEmoji
        let earnings = betAmount * 2
        let earningsReturn = funds -= earnings
        fundsEl.textContent = "Account Funds: $" + earningsReturn
        numbersEl.textContent = "Scores: " + fighterOneEmoji + ": " + fighterOneNumbers + " VS " + fighterTwoEmoji + ": " + fighterTwoNumbers
        resetBtnEl.style.display = "block";
        betAmountEl.style.display = "none";
        betSizeEl.style.display = "none";
        startEl.style.display = "none";
        fundsEl.style.display = "flex";



      }  else {
        stageEl.textContent = "Something went wrong "
      }
}
}

function reset() {
    fundsEl.style.display = "block";
    resetBtnEl.style.display = "none";
    generateEl.style.display = "block";
    fundsEl.style.display = "none";
    stageEl.textContent = "One more wont hurt.."
    emojiOnePicked = false
    emojiTwoPicked = false
    numbersEl.textContent = ""


    
}
  