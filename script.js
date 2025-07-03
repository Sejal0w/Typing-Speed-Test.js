const quoteEl = document.getElementById("quote");
const inputEl = document.getElementById("input");
const timerEl = document.getElementById("timer");
const resultEl = document.getElementById("result");
const restartBtn = document.getElementById("restart");

const quotes = [
  "JavaScript is the language of the web.",
  "Typing fast helps you code faster.",
  "Practice makes perfect.",
  "Frontend development is fun!",
  "Debugging is twice as hard as writing the code."
];

let startTime, intervalId;
let currentQuote = "";

function loadQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  currentQuote = quotes[randomIndex];
  quoteEl.textContent = currentQuote;
  inputEl.value = "";
  inputEl.disabled = false;
  resultEl.textContent = "";
  timerEl.textContent = "Time: 0s";
  clearInterval(intervalId);
}

function startTimer() {
  startTime = Date.now();
  intervalId = setInterval(() => {
    const seconds = Math.floor((Date.now() - startTime) / 1000);
    timerEl.textContent = `Time: ${seconds}s`;
  }, 1000);
}

inputEl.addEventListener("focus", () => {
  if (!startTime) startTimer();
});

inputEl.addEventListener("input", () => {
  if (inputEl.value === currentQuote) {
    clearInterval(intervalId);
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    resultEl.textContent = `✅ You typed in ${timeTaken} seconds!`;
    inputEl.disabled = true;
    startTime = null;
  }
});

restartBtn.addEventListener("click", () => {
  loadQuote();
});

window.onload = loadQuote;