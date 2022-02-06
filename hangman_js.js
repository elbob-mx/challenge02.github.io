// variables ----------->

var words = [
  "HEMINGWAY",
  "HOSSEINI",
  "BRONTE",
  "DOSTOYEVSKI",
  "TWAIN",
  "BORGES",
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
  "RAND"
]
console.log(words[10]);

// funciones ----------->

function getRandomWord() {
  var randomWord = words[Math.floor(Math.random() * words.length)];
  return randomWord;
}

var random = generateRandom(min, max);
showRandom(random);

/* buscar y declarar random en el arreglo 'words',
buscar letra dentro de la palabra,
si esta, se imprime
definir lugar de la letra,
si no, alert "intenta de nuevo" y dibujar parte del mono
depues de 'equis' intentos, game over
si se complete la palabra, alert 'felicidades' */