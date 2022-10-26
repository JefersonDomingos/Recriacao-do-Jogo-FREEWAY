//códigos do ator

//Posições do ator
let xAtor = 90;
let yAtor = 368;
let colisao = false;
let pontosGanhos = 0;

function mostraAtor (){
  image(imagemDoAtor, xAtor, yAtor, 25,25);
}

function movimentaAtor(){
  //se a seta para cima for apertada
  if(keyIsDown(UP_ARROW)){
    yAtor -=3;
  }
  //se a seta para baixo for apertada
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor +=3;
    }
  }
}

function verificarColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  
  for(let i = 0; i < imagemDosCarros.length; i++){
    colisao = collideRectCircle(xDosCarros[i], yDosCarros[i], comprimentoDosCarros, alturaDosCarros, xAtor, yAtor, 15)
    
    if(colisao){
      voltarAtorPosicaoInicial();
      perdeUmPonto();
      sonDaColisao.play();
    }
  }
}

function voltarAtorPosicaoInicial(){
  yAtor = 368;
}

function mostrarPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(0,255,0));
  text(pontosGanhos, width/ 5, 27);
}

function pontuar(){
  if(yAtor < 15){
    pontosGanhos++;
    voltarAtorPosicaoInicial();
    sonDaPontuacao.play();
  }
}

function perdeUmPonto(){
  if(pontosGanhos > 0){
    pontosGanhos-- ;
  }
}

function podeSeMover(){
  return yAtor < 368;
}