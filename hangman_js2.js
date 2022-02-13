var words = [
  "HEMINGWAY",
  "BEAUVOIR",
  "HOSSEINI",
  "BRONTE",
  "DOSTOYEVSKI",
  "TWAIN",
  "BORGES",
  "ATWOOD",
  "CORTAZAR",
  "MELVILLE",
  "LOVECRAFT",
  "KING",
  "HARARI",
  "HESSE",
  "PLATH",
  "WILDE",
  "WOOLF",
  "ASIMOV",
  "HUXLEY",
  "RAND",
  "MOORE",
  "LAGARDE",
  "BUTLER",
  "BARDUGO",
  "HURLEY",
  "JEMISIN",
  "BROWN"
];
let word = selectRandomWord();
const guessContainer = document.getElementById("guessContainer");
const manContainer = document.getElementById("manContainer");
const responseContainer = document.getElementById("responseContainer");
const letterGuessedContainer = document.getElementById(
  "letterGuessedContainer"
);
let lettersGuessed = [
  "MediaPlayPause",
  "MediaTrackNext",
  "MediaTrackPrevious",
  "Control",
  " ",
  ",",
  ".",
  "Backspace",
  "Delete",
  "ESC",
  "ArrowUp",
  "ArrowLeft",
  "ArrowDown",
  "ArrowRight",
  "End",
  "OS",
  "Enter",
  "PageUp",
  "NumLock",
  "PageDown",
  "Alt",
  "Tab",
  "Shift",
  "Insert",
  "/",
  "*",
  "-",
  "+",
  "<",
  "AltGraph",
  "CapsLock",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9"
];
let mistakeCount = 0;
const threshold = 7;

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", resetHangman);

const thresholdContainer = document.getElementById("threshold");
thresholdContainer.innerHTML = threshold - 1 + " mistakes left.";

document.addEventListener("keydown", logEvent);

function selectRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function createInputs() {
  for (let i = 0; i < word.length; i++) {
    let newNode = document.createElement("input");
    newNode.type = "text";
    newNode.setAttribute("id", "letter_" + i);
    newNode.setAttribute("disabled", "true");
    guessContainer.appendChild(newNode);
  }
}

function isWordComplete() {
  let letters = 0;
  for (let i = 0; i < word.length; i++) {
    let currentInput = document.getElementById("letter_" + i);
    if (currentInput.getAttribute("readonly")) {
      letters++;
    }
  }

  if (letters === word.length) {
    return true;
  }
}

function isLetterInWord(letter) {
  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === letter.toLowerCase()) {
      return true;
    }
  }
}

function replaceInput(letter) {
  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === letter.toLowerCase()) {
      let currentInput = document.getElementById("letter_" + i);
      currentInput.classList.add("correct");
      currentInput.value = letter;
      currentInput.setAttribute("readonly", "true");
    }
  }
}

function replaceAllInputs() {
  for (let i = 0; i < word.length; i++) {
    let currentInput = document.getElementById("letter_" + i);
    currentInput.setAttribute("readonly", "true");
  }
}

function drawHead() {
  const head = document.createElement("div");
  head.classList.add("head");
  manContainer.appendChild(head);
}

function drawBody() {
  const body = document.createElement("div");
  body.classList.add("body");
  manContainer.appendChild(body);
}

function drawLeftArm() {
  const leftArm = document.createElement("div");
  leftArm.classList.add("left-arm");
  manContainer.appendChild(leftArm);
}

function drawRightArm() {
  const rightArm = document.createElement("div");
  rightArm.classList.add("right-arm");
  manContainer.appendChild(rightArm);
}

function drawLeftLeg() {
  const leftLeg = document.createElement("div");
  leftLeg.classList.add("left-leg");
  manContainer.appendChild(leftLeg);
}

function drawRightLeg() {
  const rightLeg = document.createElement("div");
  rightLeg.classList.add("right-leg");
  manContainer.appendChild(rightLeg);
}

function drawMan() {
  drawHead();
  drawBody();
  drawLeftArm();
  drawRightArm();
  drawLeftLeg();
  drawRightLeg();
}

function drawPart(letter) {
  createLetterGuessed(letter);
  switch (mistakeCount) {
    case 1:
      drawHead();
      break;
    case 2:
      drawBody();
      break;
    case 3:
      drawLeftArm();
      break;
    case 4:
      drawRightArm();
      break;
    case 5:
      drawLeftLeg();
      break;
    case 6:
      drawRightLeg();
      break;
    case threshold:
      replaceAllInputs();
      responseContainer.innerHTML = "<p class='fail'> You failed. </p>";
      break;
  }
}

function isLetterUsed(letter) {
  for (let i = 0; i < lettersGuessed.length; i++) {
    if (letter === lettersGuessed[i].toLowerCase()) {
      return true;
    }
  }
}

function createLetterGuessed(letter) {
  if (!isLetterUsed(letter)) {
    const node = document.createElement("p");
    node.textContent = letter;
    letterGuessedContainer.appendChild(node);
    lettersGuessed.push(letter);
    mistakeCount = mistakeCount + 1;
    thresholdContainer.innerHTML = threshold - mistakeCount + " mistakes left.";
  }
}

function resetHangman() {
  mistakeCount = 0;
  thresholdContainer.innerHTML = threshold - 1 + " mistakes left.";
  manContainer.replaceChildren();
  letterGuessedContainer.replaceChildren();
  guessContainer.replaceChildren();
  responseContainer.replaceChildren();
  lettersGuessed = [
    "MediaPlayPause",
    "MediaTrackNext",
    "MediaTrackPrevious",
    "Control",
    " ",
    ",",
    ".",
    "Backspace",
    "Delete",
    "ESC",
    "ArrowUp",
    "ArrowLeft",
    "ArrowDown",
    "ArrowRight",
    "End",
    "OS",
    "Enter",
    "PageUp",
    "NumLock",
    "PageDown",
    "Alt",
    "Tab",
    "Shift",
    "Insert",
    "/",
    "*",
    "-",
    "+",
    "<",
    "AltGraph",
    "CapsLock",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ];
  word = selectRandomWord();
  createInputs();
}

function logEvent(e) {
  if (isLetterInWord(e.key) && mistakeCount !== threshold) {
    replaceInput(e.key);
    if (isWordComplete()) {
      responseContainer.innerHTML = "<p class='win'> You won! </p>";
    }
  } else {
    if (!isWordComplete()) {
      drawPart(e.key.toLowerCase());
    }
  }
}

createInputs();
