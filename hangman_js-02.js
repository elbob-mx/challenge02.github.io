var authorArr = [
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
console.log(authorArr);
console.log(authorsArr.length);
console.log(authorsArr[0]);


/* obtener palabra random del array y separar por letra ------------------->

const getRandomWord = authorsArr[Math.floor(Math.random() * authorsArr.length)];
let randomWord = getRandomWord.split("");

console.log(getRandomWord);
console.log(randomWord);

var author = document.getElementById('randomWord');


// crear espacios por letra de la palabra randome seleccionada ----------------->

var answerArr = [];
for (var i = 0; i < randomWord.length; i++) {
  answerArr[i] = "_";
}

var missingLetters = randomWord.length;


// FUNCIONES --------------------------->

// agregar palabra al array por parte del usuario introducida usando el input, filtrando numeros y simbolos ------>


function addTo() {
  // authorsArr.push(document.getElementById("addWords").value);
  let userAuthor = addWords.value
  let upperCaseAuthor = userAuthor.toUpperCase();
  let regexAuthor = upperCaseAuthor.replace(/[^a-zA-Z]/g, "");
  let regexNumbers = regexAuthor.replace(/[0-9]/g, '')
  document.getElementById("addWords").innerHTML = regexNumbers;
  authorsArr.push(regexNumbers);

  console.log(authorsArr); //confirmación
  console.log(upperCaseAuthor);
  console.log(regexAuthor);
  console.log(regexNumbers);
}

*/
 
// ======================**********************======================================== //

// VARIABLES ======================>

var startGameBtn = document.querySelector("#startGameBtn");
var addWordInput = document.querySelector("#addWordInput");
var addWordBtn = document.querySelector("#addWordBtn");
var resetButton = document.querySelector("#resetButton");

var initGame = false;
var randomAuthor;
var indexes = [];
var tempArray;
userLetterArr = [];
correctLetterArr = [];
wrongLetterArr = [];
let soloLetters = [];


// FUNCIONES ========================>

// función no repetir letras --------------->
function nonRepeatLetters() {
    for(i=0;i<randomAuthor.length;i++){
        if(!soloLetters.includes(randomAuthor[i])){
            soloLetters.push(randomAuthor[i])
        }
    }
}

// autor random y eliminado ----------------------->
function selectRandomAuthor() {
    var randomInt = Math.floor(Math.random()*authorArr.length);
    randomAuthor = authorArr[randomInt];
    authorArr.splice(randomInt,1);
    return randomAuthor;
}

// crear array temporal por juego -------------------->
function tempArr(palabra) {
    splitWord = palabra.split("");
    tempArray = splitWord;
}

// funciones de botones --------------------------->
startGameBtn.addEventListener("click",function(event) {
    event.preventDefault();
    stroke.clearRect(0, 0, screen.width, screen.height);
    playGame();
})

resetButton?.addEventListener("click",function(event) {
    event.preventDefault();
    stroke.clearRect(0, 0, screen.width, screen.height);
    playGame();
})

// agregar palabras usuario ------------------------------>
addWordBtn.addEventListener("click",function(event) {
    event.preventDefault();
    authorArr.push(addWordInput.value.toUpperCase());
    addWordInput.value = "";
    addWordInput.focus();
})

// arrancar juego -------------------------------->
function playGame() {
    stroke.clearRect(0, 0, screen.width, screen.height);
    horca();
    selectRandomAuthor();
    tempArr(randomAuthor);
    printUnderscore();
    nonRepeatLetters();
    initGame = true;
    userLetterArr = [];
    correctLetterArr = [];
    wrongLetterArr = [];
}


/*  genera un array con los indexes de las letras ingresadas
por los usuarios, esto permite que si hay letras repetidas
dentro de la palabra original pueda dibujar todas
las instancias de esa letra  */

function searchIndexes() {
    if (initGame){
    var indexSeek = tempArray.indexOf(userLetterArr[0]);
        while (indexSeek != -1) { // -1 si no encuentra índice
            indexes.push(indexSeek);
            indexSeek = tempArray.indexOf(userLetterArr[0], indexSeek + 1);
    }
  }
}

// print de guines bajos -------------------------->
function printUnderscore() {
    var startX = 350;
    var startY = 610;
    var count = 0;
    var fooLetters = randomAuthor.length;
    while (count<fooLetters){
        stroke.fillStyle = "black";
        stroke.fillRect(startX+(40*count),startY,30,4);
        count++;
    }
}
// letras acertadas del usuario ------------------>
function printLetters(orderArr) {
    var startX = 358;
    var startY = 600;
        for(i=0;i<orderArr.length;i++){
            stroke.fillStyle = "whitesmoke";
            stroke.font = "20px Courier New";
            stroke.fillText(userLetterArr[0],startX+(40*orderArr[i]),startY);
        }
        indexes = [];
}

/* capturar teclas del usuario, comprueba sean letras y chars especiales o números y
almacena las letras en uno de dos arrays,
si la letra esta o no en la palabra seleccionada.
dibuja las piezas de la horca y revisa si el juego terminó */

document.addEventListener("keyup", function(event) {
    userLetterArr = [];
    var letra = event.key.toUpperCase();
    var codigo = letra.charCodeAt();
    if (initGame) {
    if (codigo>64 && codigo<91) {
        userLetterArr.push(letra);
        searchIndexes();
        printLetters(indexes);
        var comparador = wrongLetterArr.length;
        if(tempArray.includes(letra)) {
            if(!correctLetterArr.includes(letra)) {
                correctLetterArr.push(letra)
            }
        } else if(!wrongLetterArr.includes(letra)){
            wrongLetterArr.push(letra)
        }
        if(comparador<wrongLetterArr.length) {
            printWrongLetetrs(wrongLetterArr) 
        }
        printGallow();
        }
    checkWinner();
    checkFail();
    } 
});


// print letras erroneas -------------------------->
function printWrongLetetrs(failLetter) {
    var startX = 400;
    var startY = 200;
    stroke.fillStyle = "black";
    stroke.font = "20px Courier New";
    stroke.fillText("letras erroneas " + failLetter.toString(),startX,startY);
}

// situación ganador ------------------->
function checkWinner() {
    let palabraOriginalsifooLettersRepetidas = soloLetters.sort().toString();
    let letrasErroneasIngresadas = correctLetterArr.sort().toString();
    if(palabraOriginalsifooLettersRepetidas===letrasErroneasIngresadas){
        stroke.fillStyle = "gold";
        stroke.font = "40px Courier New";
        stroke.fillText("NERD!",600,400);
        initGame = false;
        resetButton?.focus();
        soloLetters = [];
    }
}
// situación perdedor ---------------------->
function checkFail(){
    if(wrongLetterArr.length>5) {
      stroke.fillStyle = "tomato";
      stroke.font = "40px Courier New";
      stroke.fillText("Hay que leer más...",600,400);
      initGame = false;
      resetButton?.focus();
      alert("la palabra era " + randomAuthor);
      soloLetters = [];
    }
}

// partes del ahorcado dependiendo errores ------------->
function printGallow(){
    let count = wrongLetterArr.length;
    if (count===1){
        head()
    }else if(count===2){
        body()
    }else if(count===3){
        leftArm()
    }else if(count===4){
        rightArm()
    }else if(count===5){
        leftLeg()
    }else if(count===6){
        rightLeg()
    }
}

// frases ganadoras -------->

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
//     getRandomWord == authorsArr[25] {
//     document.print("Dales todo lo que tienes, pero no les enseñes todo lo que sabes.");
//   }
// }



// world domination plan ---------------->

/* buscar y declarar random en el arreglo 'authorArr',
buscar letra dentro de la palabra,
si está, se imprime
definir lugar de la letra,
si no, se imprime en canvas y dibuja parte del mono
depues de '5' intentos, game over
si se completa la palabra, alert 'FRASE ESCRITOR' */