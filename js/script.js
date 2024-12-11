const num1Elm = document.getElementById("num1")
const num2Elm = document.getElementById("num2")
const num3Elm = document.getElementById("num3")
const num4Elm = document.getElementById("num4")
const num5Elm = document.getElementById("num5")
const confirmElm = document.getElementById("confirm")
const outputElm = document.getElementById("output")

// Funzione per generare 5 numeri casuali
function generateRandomNumbers() {
    const numbers = [];
    for (let i = 0; i < 5; i++) {
      numbers.push(Math.floor(Math.random() * 100) + 1); 
    }
    return numbers;
  }
  console.log(numbers);