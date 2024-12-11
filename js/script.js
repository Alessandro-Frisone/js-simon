const num1Elm = document.getElementById("num1")
const num2Elm = document.getElementById("num2")
const num3Elm = document.getElementById("num3")
const num4Elm = document.getElementById("num4")
const num5Elm = document.getElementById("num5")
const confirmElm = document.getElementById("confirm")
const outputElm = document.getElementById("output")
const randomNumberOutputElm = document.getElementById("randomNumberOutput")
const boxNumbersElm = document.getElementById("boxNumbers")
const inputUser1Elm = document.getElementById("inputUser1")
const inputUser2Elm = document.getElementById("inputUser2")
const inputUser3Elm = document.getElementById("inputUser3")
const inputUser4Elm = document.getElementById("inputUser4")
const inputUser5Elm = document.getElementById("inputUser5")


// Funzione per generare 5 numeri casuali
function generateRandomNumbers() {
    let numbers = [];
    for (let i = 0; i < 5; i++) {
      numbers.push(Math.floor(Math.random() * 100) + 1); 
    }
    return numbers;
  }
  const newNumbers = generateRandomNumbers();
  // Stampa dei numeri randomici a schermo
  randomNumberOutputElm.innerHTML = newNumbers;
// Creazione timer (20 secondi)
setTimeout(() => {
  randomNumberOutputElm.classList.add("hidden")
  inputUser1Elm.classList.remove("hidden")
  inputUser2Elm.classList.remove("hidden")
  inputUser3Elm.classList.remove("hidden")
  inputUser4Elm.classList.remove("hidden")
  inputUser5Elm.classList.remove("hidden")
}, 5000);