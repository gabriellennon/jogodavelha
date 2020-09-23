const jogador = "X";
const computador = "O";
let gameOver = false;
let playTime = "";

function vezdojogador(){
    playTime = document.getElementsByTagName("jogador");
    playTime = document.querySelectorAll("div#header img")[0];
    playTime.setAttribute("src", "circle.jpg");
}
function vezdoCPU(){
    playTime = document.getElementsByTagName("computador");
    playTime = document.querySelectorAll("div#header img")[0];
    playTime.setAttribute("src", "x.jpg");
}
function vezjogo(){
    let select = document.getElementById("select").value;
    document.getElementById("vezJogo").innerHTML = "Quem joga: "
    if(select == "jogador"){
        vezdojogador();
    }
    else {
        vezdoCPU();
    }
}

// function quemJoga(){
//     if(document.getElementsByTagName("jogador" == "jogador")){
//         vezdojogador();
//     }else if (document.getElementsByTagName("computador") == "computador"){
//         vezdoCPU();
//     }
// }

// quemJoga();
// inicializarEspacos();
// jogar();
// cpu();