var pantalla = document.querySelector("#hangman");
var stroke = pantalla.getContext("2d");


function horca(){
    stroke.fillStyle = "#FFDEAD"
    stroke.beginPath();
    stroke.moveTo(100,600);
    stroke.lineTo(50,620);
    stroke.lineTo(150,620);
    stroke.fill();
    stroke.fillRect(95,205,10,400);
    stroke.fillRect(95,205,200,10);
    stroke.fillRect(295,205,10,50);
}
function head(){
    stroke.fillStyle = "#FFDEAD"
    stroke.beginPath();
    stroke.arc(300,295,40,0,2*3.14);
    stroke.fill();
}

function body(){
    stroke.fillStyle = "#FFDEAD"
    stroke.fillRect(295,335,10,130);
}

function leftArm(){
    stroke.fillStyle = "#FFDEAD"
    stroke.beginPath();
    stroke.moveTo(295,355);
    stroke.lineTo(220,325);
    stroke.lineTo(220,335);
    stroke.lineTo(295,365);
    stroke.fill();
}

function rightArm(){
    stroke.fillStyle = "#FFDEAD"
    stroke.beginPath();
    stroke.moveTo(305,355);
    stroke.lineTo(380,325);
    stroke.lineTo(380,335);
    stroke.lineTo(305,365);
    stroke.fill();
}

function leftLeg(){
    stroke.fillStyle = "#FFDEAD"
    stroke.beginPath();
    stroke.moveTo(295,455);
    stroke.lineTo(210,505);
    stroke.lineTo(210,515);
    stroke.lineTo(295,465);
    stroke.fill();
}

function rightLeg(){
    stroke.fillStyle = "#FFDEAD"
    stroke.beginPath();
    stroke.moveTo(305,455);
    stroke.lineTo(390,505);
    stroke.lineTo(390,515);
    stroke.lineTo(305,465);
    stroke.fill();
}