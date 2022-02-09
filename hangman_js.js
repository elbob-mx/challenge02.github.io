// variables ----------->

var authorsArr = [
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
  "ATWOOD",
  "BARDUGO",
  "HURLEY",
  "MONTERO",
  "CLARKE",
  "HOBB",
  "JEMISIN",
  "EXUPERY",
];
console.log(authorsArr.length);
console.log(authorsArr[0]);

// var addWord = document.querySelector("#addWords");
// addWordsBtn.addEventListener("click", function (event) {
//   event.preventDefault()
//   addWordMsg(alert("success"));
// });

var btnAdd = document.querySelector("#addWordsBtn");
var input = document.querySelector("#addWords");

// funciones ----------->

function addUserWord () {
  input.push();
}

const getRandomWord = authorsArr[Math.floor(Math.random() * authorsArr.length)];
let randomWord = getRandomWord.split("");

console.log(getRandomWord);
console.log(randomWord);


/* buscar y declarar random en el arreglo 'words',
buscar letra dentro de la palabra,
si está, se imprime
definir lugar de la letra,
si no, alert "intenta de nuevo" y dibujar parte del mono
depues de 'equis' intentos, game over
si se complete la palabra, alert 'FRASE ESCRITOR' */