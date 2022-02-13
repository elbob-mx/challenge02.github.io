// ARRAY de autores --------------------------->


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
  "BARDUGO",
  "HURLEY",
  "JEMISIN",
  "BROWN"
];
console.log(authorsArr.length);
// console.log(authorsArr[0]);


// VARIABLES --------------------------->

// CONSTANTES ------------->

// obtener palabra random del array y separar por letra
const getRandomWord = authorsArr[Math.floor(Math.random() * authorsArr.length)];
const randomWord = getRandomWord.split("");
console.log(getRandomWord);
console.log(randomWord);

// const loadImages



// crear espacios por letra de la palabra random seleccionada

var answerArr = [];
for (var i = 0; i < randomWord.length; i++) {
  answerArr[i] = "_";
  // document.write(answerArr);
}
console.log(answerArr);

var missingLetters = randomWord.length;
console.log(missingLetters);

// aciertos y errores

const letrasAciertos= [];
const letrasErrores = [];

// FUNCIONES ------------------------------------->

// agregar palabra al array por parte del usuario introducida usando el input, filtrando numeros y simbolos
function addTo() {
  // authorsArr.push(document.getElementById("addWords").value);
  var userAuthor = addWords.value
  var upperCaseAuthor = userAuthor.toUpperCase();
  var regexAuthor = upperCaseAuthor.replace(/[^a-zA-Z]/g, '');
  var regexNumbers = regexAuthor.replace(/[0-9]/g, '');
  document.getElementById("addWords").innerHTML = regexNumbers;
  authorsArr.push(regexNumbers);

  console.log(authorsArr); //confirmación existencia de array principal
  console.log(upperCaseAuthor); // convertir a mayúsculas
  console.log(regexAuthor); //confirmación palabra seleccionada del array
  console.log(regexNumbers); //confirmación separado por letras
}


// letras por adivinar --------------------------->

// 

// actualizar letras erróneas

// function actLetrasErrores() {
//   // mostrar letras mal
//   wrongLetters.innerHTML = `
//   ${wrongLetters.length > 0 ? "<p>error!</p>" : ''}
//   ${wrongLetters.map(letter => `<span>${letter}</span>)`)}
//   `;
// }

// uso de teclado ------------------------------->



  // espacios vacíos letras --------------------->

// frases ganadoras ----------------------------->

// const innerWord = regexNumbers.innerText.replace(/\n/g, '');

//   if (innerWord === regexNumbers){
//     if(finalPhrase.innerText) {
//       if(getRandomWord == [0]) {
//         alert("El secreto de la sabiduría, del poder y del conocimiento es la humildad");
//         // popup.style.display= 'flex';
//       }
//     } 
//   }

// if (/* ACIERTA */) { alert
//   else if (
//     getRandomWord == [0] else {
//     document.print("El secreto de la sabiduría, del poder y del conocimiento es la humildad");
//   }
//   else if (
//     getRandomWord == [1] {
//     document.print("Una mujer libre es justo lo contrario de una mujer fácil");
//   }
//   else if (
//     getRandomWord == [2] {
//     document.print("Ser cobarde no tiene nada de malo mientras vaya acompañado de la prudencia. Pero cuando el cobarde deja de recordar quién es..., que Dios lo ayude.");
//   }
//   else if (
//     getRandomWord == [3] {
//     document.print("Las personas orgullosas engendran tristezas por sí mismas.");
//   }
//   else if (
//     getRandomWord == [4] {
//     document.print("Hay que querer hasta el extremo de alcanzar el fin; todo lo demás son insignificancias.");
//   }
//   else if (
//     getRandomWord == [5] {
//     document.print("Un hombre con una idea nueva es un loco hasta que la idea triunfa.");
//   }
//   else if (
//     getRandomWord == [6] {
//     document.print("La duda es uno de los nombres de la inteligencia.");
//   }
//   else if (
//     getRandomWord == [7] {
//     document.print("No sabes de lo que eres capaz hasta que tienes que hacerlo.");
//   }
//   else if (
//     getRandomWord == [8] {
//     document.print("La explicación es un error bien vestido.");
//   }
//   else if (
//     getRandomWord == [9] {
//     document.print("La verdad contada de modo inflexible tendrá siempre sus lados escabrosos.");
//   }
//   else if (
//     getRandomWord == authorsArr[10] {
//     document.print("El proceso de profundizar en el abismo negro es para mí la forma más aguda de fascinación.");
//   }
//   else if (
//     getRandomWord == authorsArr[11] {
//     document.print("Si no hubiera quienes triunfan contra toda probabilidad, creo que todo el mundo renunciaría.");
//   }
//   else if (
//     getRandomWord == authorsArr[12] {
//     document.print("La felicidad consiste en ver que la vida de uno en su totalidad tiene sentido y vale la pena.");
//   }
//   else if (
//     getRandomWord == authorsArr[13] {
//     document.print("Cuando alguien que de verdad necesita algo, lo encuentra, no es la casualidad quien lo procura, sino él mismo. Su propio deseo y su propia necesidad le conducen a ello.");
//   }
//   else if (
//     getRandomWord == authorsArr[14] {
//     document.print("Inspiré profundamente y escuché el antiguo estribillo de mi corazón. Yo soy yo soy yo soy.");
//   }
//   else if (
//     getRandomWord == authorsArr[15] {
//     document.print("Nos pasamos años sin vivir en absoluto, y de pronto toda nuestra vida se concentra en un solo instante.");
//   }
//   else if (
//     getRandomWord == authorsArr[16] {
//     document.print("Durante la mayor parte de la historia, 'Anónimo' era una mujer.");
//   }
//   else if (
//     getRandomWord == authorsArr[17] {
//     document.print("En presencia de la Oscuridad total, la mente cree que es absolutamente necesario crear luz.");
//   }
//   else if (
//     getRandomWord == authorsArr[18] {
//     document.print("La realidad no es lo que nos sucede, sino lo que hacemos con lo que nos sucede.");
//   }
//   else if (
//     getRandomWord == authorsArr[19] {
//     document.print("¿Te sientes miserablemente indefenso y quieres rebelarte? Rebélate contra las ideas de tus maestros.");
//   }
//   else if (
//     getRandomWord == authorsArr[20] {
//     document.print("El pasado no puede hacerte daño, no a menos que se lo permitas.");
//   }
//   else if (
//     getRandomWord == authorsArr[21] {
//     document.print("Nos han enseñado a tener miedo a la libertad; miedo a tomar decisiones, miedo a la soledad. El miedo a la soledad es un gran impedimento en la construcción de la autonomía, porque desde muy pequeñas y toda la vida se nos ha formado en el sentimiento de orfandad.");
//   }
//   else if (
//     getRandomWord == authorsArr[22] {
//     document.print("Cualquiera que sea la libertad por la que luchamos, debe ser una libertad basada en la igualdad.");
//   }
//   else if (
//     getRandomWord == authorsArr[23] {
//     document.print("Los hechos estan para los que no tienen imaginacion.");
//   }
//   else if (
//     getRandomWord == authorsArr[24] {
//     document.print("Tu voz es poderosa. Tu voz tiene significado, si no lo tuviera, no se esforzarían tanto en silenciarla.");
//   }
//   else if (
//     getRandomWord == authorsArr[25] {
//     document.print("La magia es meramente comunicación y conductas.");
//   }
//   else if (
//     getRandomWord == authorsArr[26] {
//     document.print("Dales todo lo que tienes, pero no les enseñes todo lo que sabes.");
//   }
// }



// world domination plan ---------------->

/* buscar y declarar random en el arreglo 'words',
buscar letra dentro de la palabra,
si está, se imprime
definir lugar de la letra,
si no, alert "intenta de nuevo" y dibujar parte del mono
depues de 'equis' intentos, game over
si se complete la palabra, alert 'FRASE ESCRITOR' */