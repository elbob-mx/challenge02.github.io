// ARRAY --------------------------->

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
];
console.log(authorsArr.length);
console.log(authorsArr[0]);

// VARIABLES --------------------------->

const getRandomWord = authorsArr[Math.floor(Math.random() * authorsArr.length)];
let randomWord = getRandomWord.split("");

console.log(getRandomWord);
console.log(randomWord);


var author = document.getElementById('randomWord');


// FUNCIONES --------------------------->

function addTo() {
  authorsArr.push(document.getElementById("addWords").value);
  console.log(authorsArr); //confirmación
}

// crear espacios para letras ------>

function createWordLetters() {
  var newDiv = document.createElement("lettersDiv");
  var newContent = document.createTextNode("Comencemos");
  newDiv.appendChild(newContent);
}

function spellRandomWord() {
  var authorList = document.createElement('li');
  authorList.setAtribute("class", "thisAuthor");
  authorList.appendChild(authorList);
}

// botón iniciar juego ------->

// frases ganadoras -------->

if (/* ACIERTA */) { alert
  else if (
    getRandomWord == [0] {
    document.print("El secreto de la sabiduría, del poder y del conocimiento es la humildad");
  };
  else if (
    getRandomWord == [1] {
    document.print("Una mujer libre es justo lo contrario de una mujer fácil");
  }
  else if (
    getRandomWord == [2] {
    document.print("Ser cobarde no tiene nada de malo mientras vaya acompañado de la prudencia. Pero cuando el cobarde deja de recordar quién es..., que Dios lo ayude.");
  }
  else if (
    getRandomWord == [3] {
    document.print("Las personas orgullosas engendran tristezas por sí mismas.");
  }
  else if (
    getRandomWord == [4] {
    document.print("Hay que querer hasta el extremo de alcanzar el fin; todo lo demás son insignificancias.");
  }

}



// world domination plan ---------------->

/* buscar y declarar random en el arreglo 'words',
buscar letra dentro de la palabra,
si está, se imprime
definir lugar de la letra,
si no, alert "intenta de nuevo" y dibujar parte del mono
depues de 'equis' intentos, game over
si se complete la palabra, alert 'FRASE ESCRITOR' */