
function setup() {
    createCanvas(500, 400);
    sonDaTrilha.loop();
  }
  
  function draw() {
    background(imagemDaEstrada);
    mostraCarros();
    mostraAtor();
    movimentaCarros();
    movimentaAtor();
    retornarCarrosPosicaoInicial();
    verificarColisao();
    mostrarPontos(); 
    pontuar();
  }

  
  
  