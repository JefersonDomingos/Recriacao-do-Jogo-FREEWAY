//códigos das imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemDosCarros;

//códigos dos sons
let sonDaTrilha;
let sonDaColisao;
let sonDaPontuacao;

function preload(){
  //imagens
  imagemDaEstrada = loadImage("assets/IMG/estrada.png");
  imagemDoAtor = loadImage("assets/IMG/ator-1.png");
  imagemCarro1 = loadImage("assets/IMG/carro-1.png");
  imagemCarro2 = loadImage("assets/IMG/carro-2.png");
  imagemCarro3 = loadImage("assets/IMG/carro-3.png");
  imagemDosCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
  
  //sons
  sonDaTrilha = loadSound("SOUNDS/trilha.mp3");
  sonDaColisao = loadSound("SOUNDS/colidiu.mp3");
  sonDaPontuacao = loadSound("SOUNDS/pontos.wav");
  
}