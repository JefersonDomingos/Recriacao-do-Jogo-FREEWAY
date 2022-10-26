
//código dos carros
let xDosCarros = [600,600,600,600,600,600];
let yDosCarros = [40,96,150,210,270,318];
let velocidadeDosCarros = [2, 2.8, 5, 3.2, 3, 2.4];
let comprimentoDosCarros = 50;
let alturaDosCarros = 40;


function mostraCarros() {
  for(let i = 0; i < imagemDosCarros.length; i++ ){
    image(imagemDosCarros[i], xDosCarros[i], yDosCarros[i], comprimentoDosCarros,alturaDosCarros);
  }
}

function movimentaCarros(){
  for(let i = 0; i < imagemDosCarros.length; i++){
    xDosCarros[i] -= velocidadeDosCarros[i];
  }
}

function retornarCarrosPosicaoInicial(){
  for(let i = 0; i < imagemDosCarros.length; i++){
  
    if(carroPassouTodaTela(xDosCarros[i])){
    xDosCarros[i] = 600;
    }
  }
}

function carroPassouTodaTela(xCarroAtual){
  return xCarroAtual < -50;
}

