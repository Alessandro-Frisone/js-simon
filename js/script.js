const num1Elm = document.getElementById("num1")
const num2Elm = document.getElementById("num2")
const num3Elm = document.getElementById("num3")
const num4Elm = document.getElementById("num4")
const num5Elm = document.getElementById("num5")
const confirmElm = document.getElementById("confirm")
const outputElm = document.getElementById("output")

// Funzione per generare numeri casuali
function generateRandomNumbers(min, max) {
    const numbers = [];
    while (numbers.length < count) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    return numbers;
  }
//  Mostra i numeri casuali in pagina
const randomNumbers = generateRandomNumbers(5, 1, 100);
randomNumbersElement.textContent = randomNumbers.join(", ");