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
];
console.log(authorsArr.length);
console.log(authorsArr[0]);

// funciones ----------->

function addUserWord() { 
  authorsArr.push("hangman_js.js".getElementById("agregarPalabra").value);
  alert("word included"); 
  console.log(authorsArr); // confirmación
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