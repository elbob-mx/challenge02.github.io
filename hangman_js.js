// array ----------->

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

// variables -------->

const getRandomWord = authorsArr[Math.floor(Math.random() * authorsArr.length)];
let randomWord = getRandomWord.split("");

console.log(getRandomWord);
console.log(randomWord);


var author = document.getElementById('randomWord');


// funciones ----------->

function addTo() { 
  authorsArr.push(document.getElementById("addWords").value); 
  console.log(authorsArr); //confirmación
} 

// crear espacios para letras ------>

function createWordLetters() {
  var newDiv = document.createElement("lettersDiv");
  var newContent = document.createTextNode("Shall we start?");
	//agregue el nodo de texto al div recién creado
  newDiv.appendChild(newContent); 
}

function spellRandomWord() {
  var authorList = document.createElement('li');
    authorList.setAtribute("class", "thisAuthor");
    fruta.appendChild(authorList);
}



// world domination plan ---------------->

/* buscar y declarar random en el arreglo 'words',
buscar letra dentro de la palabra,
si está, se imprime
definir lugar de la letra,
si no, alert "intenta de nuevo" y dibujar parte del mono
depues de 'equis' intentos, game over
si se complete la palabra, alert 'FRASE ESCRITOR' */