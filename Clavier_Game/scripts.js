const phrase = [
  "salut",
  "comment",
  "bonjour",
  "carte",
  "verre",
  "bouchon",
  "bouteille",
  "lampe",
];
let minute = 1;
let seconde = 60;
const text = document.querySelector(".text");
const time = document.querySelector(".time");
const point = document.querySelector(".point");
let result = phrase[Math.floor(Math.random() * 8)];
let score = 0;

function newWord() {
  response.value = "";
  result = phrase[Math.floor(Math.random() * 8)];
  text.innerHTML = `${result}`;
  time.innerHTML = `${minute}:00`;
  point.innerHTML = `${score}`;
  text.style.color = "aliceblue";
}
newWord();
function Reset() {
  response.value = "";
  minute = 1;
  seconde = 60;
  score = 0;
}

function Form(key) {
  if (result == key.target.value) {
    text.style.color = "green";

    score++;
  }
}

function app(key) {
  if (result.match(key.target.value)) {
    text.style.color = "aliceblue";
  } else if (key.data == " ") {
    newWord();
    response.value = "";
  } else {
    text.style.color = "red";
  }
}
let a = 0;
let b = 1;
response.addEventListener("input", (e) => {
  if (a < b) {
    Timer(e);
  }
  if (seconde == 0 && e.data) {
    Reset();
  }
  a = 10;
  console.log(e);
  app(e);
  Form(e);
});

// -----------
// Time
function Timer(e) {
  setInterval(() => {
    minute = 0;
    if (seconde === 0) {
      seconde = 0;
      time.innerHTML = `${minute}:00`;
      HighScore();
    } else if (seconde < 10) {
      time.innerHTML = `${minute}:0${seconde}`;
      seconde--;
    } else if (minute == 0) {
      seconde--;
      time.innerHTML = `${minute}:${seconde}`;
    }
  }, 1000);
}

// ---------------
// HighScore

const HighScoreText = document.querySelector(".high-score");

let oldScore = window.localStorage.HighScore;
HighScoreText.innerHTML = `HighScore : ${oldScore}`;
function HighScore() {
  let newScore = score;
  if (newScore > oldScore) {
    window.localStorage.HighScore = JSON.parse(newScore);
    oldScore = window.localStorage.HighScore;
    HighScoreText.innerHTML = `HighScore : ${newScore}`;
  } else if (oldScore == undefined) {
    oldScore = 0;
    HighScoreText.innerHTML = `HighScore : ${oldScore}`;
  }
}
HighScore();
