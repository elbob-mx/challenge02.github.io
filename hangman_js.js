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
var arrayPalabra;
arrayLetraIngresada = [];
arrayLetrasCorrectas = [];
arrayLetrasIncorrectas = [];
let letrasUnicas = [];
//--------funcion para generar un array sin letras repetidas
//--------que sera usado para verificar el ganador
function cribarLetrasRepetidas(){
    for (i=0;i<randomAuthor.length;i++){
        if(!letrasUnicas.includes(randomAuthor[i])){
            letrasUnicas.push(randomAuthor[i])
        }
    }
}
//--------sortea una palabra aleatoria del array original
//--------luego elimina esa palabra del array para que no repita
function sortearPalabra(){
    var numeroAleatorio = Math.floor(Math.random()*palabrasSecretas.length);
    randomAuthor = palabrasSecretas[numeroAleatorio];
    palabrasSecretas.splice(numeroAleatorio,1);
    return randomAuthor;
}
//--------crea un array para ser usado como referencia para el juego
function crearArrayPalabra(palabra){
    separada = palabra.split("");
    arrayPalabra = separada;
}
//--------asigna la funcionalidad a los botones de inicio y reinicio
startGameBtn.addEventListener("click",function(event){
    event.preventDefault();
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    iniciarJuego();
})
btnReiniciar.addEventListener("click",function(event){
    event.preventDefault();
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    iniciarJuego();
})
//--------permite al usuario agregar sus propias palabras
btnAgregarPalabra.addEventListener("click",function(event){
    event.preventDefault();
    palabrasSecretas.push(addWordInput.value.toUpperCase());
    addWordInput.value = "";
    addWordInput.focus();
})
//--------nuclea las acciones necesarias para iniciar un nuevo juego
function iniciarJuego(){
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    patibulo();
    sortearPalabra();
    crearArrayPalabra(randomAuthor);
    dibujarGuiones();
    cribarLetrasRepetidas();
    initGame = true;
    arrayLetraIngresada = [];
    arrayLetrasCorrectas = [];
    arrayLetrasIncorrectas = [];
}
//--------genera un array con los indexes de las letras ingresadas 
//--------por los usuarios, esto permite que si hay letras repetidas
//--------dentro de la palabra original pueda dibujar todas
//--------las instancias de esa letra
function buscarindexes(){
    if (initGame){
    var indiceBuscado = arrayPalabra.indexOf(arrayLetraIngresada[0]);
        while (indiceBuscado != -1) { //el -1 es el return de indexOf si no encuentra el elemento
            indexes.push(indiceBuscado);
            indiceBuscado = arrayPalabra.indexOf(arrayLetraIngresada[0], indiceBuscado + 1);
  }
}
}
//--------dibuja la cantidad de guiones necesarios para la palabra en juego
function dibujarGuiones(){
    var inicioX = 350;
    var inicioY = 610;
    var contador = 0;
    var nLetras = randomAuthor.length;
    while (contador<nLetras){
        pincel.fillStyle = "red";
        pincel.fillRect(inicioX+(40*contador),inicioY,30,4);
        contador++;
    }
}
//--------coloca cada letra en el lugar que deberia aparecer
function dibujarletras(arrOrden){
    var inicioX = 358;
    var inicioY = 600;
        for(i=0;i<arrOrden.length;i++){
            pincel.fillStyle = "blue";
            pincel.font = "20px Georgia";
            pincel.fillText(arrayLetraIngresada[0],inicioX+(40*arrOrden[i]),inicioY);
        }
        indexes = [];
}
//--------evento para capturar las teclas del usuario, en el cual
//--------comprueba si son letras y no caracteres especiales o numeros
//--------almacena las letras en uno de dos arrays, de acuerdo a si la
//--------letra esta o no dentro de la palabra sorteada.
//--------tambien dibuja la pieza del ahorcado en caso de que sea necesario
//--------y comprueba si el juego ha terminado
document.addEventListener("keyup", function(event){
    arrayLetraIngresada = [];
    var letra = event.key.toUpperCase();
    var codigo = letra.charCodeAt();
    if (initGame){
    if(codigo>64 && codigo<91){
        arrayLetraIngresada.push(letra);
        buscarindexes();
        dibujarletras(indexes);
        var comparador = arrayLetrasIncorrectas.length;
        if(arrayPalabra.includes(letra)){
            if(!arrayLetrasCorrectas.includes(letra)){
                arrayLetrasCorrectas.push(letra)
            }
        }else if(!arrayLetrasIncorrectas.includes(letra)){
            arrayLetrasIncorrectas.push(letra)
        }
        if(comparador<arrayLetrasIncorrectas.length){
            dibujarLetrasErroneas(arrayLetrasIncorrectas) 
        }
        dibujarAhorcado();
        }
    verificarFinGanador();
    verificarFinPerdedor();
    } 
});
//--------dibuja las letras que no estan en la palabra sorteada
function dibujarLetrasErroneas(letrasIncorrectas){
    var inicioX = 400;
    var inicioY = 200;
    pincel.fillStyle = "black";
    pincel.font = "20px Georgia";
    pincel.fillText("letras erroneas " + letrasIncorrectas.toString(),inicioX,inicioY);
}
//--------comprueba si el juego ha terminado con resultado positivo
function verificarFinGanador(){
    let palabraOriginalsinLetrasRepetidas = letrasUnicas.sort().toString();
    let letrasErroneasIngresadas = arrayLetrasCorrectas.sort().toString();
    if(palabraOriginalsinLetrasRepetidas===letrasErroneasIngresadas){
        pincel.fillStyle = "lightgreen";
        pincel.font = "50px Georgia";
        pincel.fillText("Ganaste, felicidades!",600,400);
        initGame = false;
        btnReiniciar.focus();
        letrasUnicas = [];
    }
}
//--------comprueba si el juego ha terminado con resultado negativo
function verificarFinPerdedor(){
    if(arrayLetrasIncorrectas.length>5){
        pincel.fillStyle = "red";
        pincel.font = "50px Georgia";
        pincel.fillText("Fin del juego!",600,400);
        initGame = false;
        alert("la palabra era " + randomAuthor);
        btnReiniciar.focus();
        letrasUnicas = [];
    }
}
//--------dibuja la pieza del ahorcado correspondiente segun la cantidad de errores
function dibujarAhorcado(){
    let contador = arrayLetrasIncorrectas.length;
    if (contador===1){
        cabeza()
    }else if(contador===2){
        cuerpo()
    }else if(contador===3){
        brazoIzquierdo()
    }else if(contador===4){
        brazoDerecho()
    }else if(contador===5){
        piernaIzquierda()
    }else if(contador===6){
        piernaDerecha()
    }
}