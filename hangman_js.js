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

// ====================================================================================== //

// VARIABLES ======================>

var startGameBtn = document.querySelector("#startGameBtn");
var addWordInput = document.querySelector("#addWordInput");
var addWordBtn = document.querySelector("#addWordBtn");
var resetButton = document.querySelector("#reset-button");

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

resetButton.addEventListener("click",function(event) {
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


//--------genera un array con los indexes de las letras ingresadas 
//--------por los usuarios, esto permite que si hay letras repetidas
//--------dentro de la palabra original pueda dibujar todas
//--------las instancias de esa letra
function searchIndexes() {
    if (initGame){
    var indexSeek = tempArray.indexOf(userLetterArr[0]);
        while (indexSeek != -1) { //el -1 es el return de indexOf si no encuentra el elemento
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

/* evento para capturar las teclas del usuario, en el cual comprueba si son letras y no caracteres especiales o numeros almacena las letras en uno de dos arrays, de acuerdo a si la letra esta o no dentro de la palabra sorteada.
tambien dibuja la pieza del ahorcado en caso de que sea necesario y comprueba si el juego ha terminado */

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
        reset-button.focus();
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
        alert("la palabra era " + randomAuthor);
        reset-button.focus();
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