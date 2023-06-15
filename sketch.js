var back,backImg;
var runner, runnerImg;
var monster, monsterImg;

function preload(){
  
  runnerImg = loadImage("assets/runner.png")

  monsterImg = loadImage("assets/monster.webp")

  backImg = loadImage("assets/back.webp")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  back = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  back.addImage(backImg)
  back.scale = 9
  

//criando o sprite do jogador
runner = createSprite(displayWidth-1700, displayHeight-300, 50, 50);
runner.addImage(runnerImg)     //PLAYER
runner.scale = 0.3
 
 
runner.debug = false
  
  monster = createSprite(displayWidth-900, displayHeight-550, 300, 300);
  monster.addImage(monsterImg)      //MONSTRO
  monster.scale = 4

  
  
  runner.setCollider("rectangle",0,0,300,300)
  //player.Setcollider("rectangle",0,0,300,300)

}


function draw() {
  background(0); 


  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando touches (toques)
  if(keyDown("UP_ARROW")||touches.length>0){
    runner.y = runner.y-20
  }

  if(keyDown("DOWN_ARROW")||touches.length>0){
    runner.y = runner.y+20
  }

  if(keyDown("LEFT_ARROW")||touches.length>0){
    runner.x = runner.x-20
  }

  if(keyDown("RIGHT_ARROW")||touches.length>0){
    runner.x = runner.x+20
  }
 
  //monstro se mexendo

  if(keyDown("w")||touches.length>0){
    monster.y = monster.y-10
  }

  if(keyDown("s")||touches.length>0){
    monster.y = monster.y+10
  }

  if(keyDown("a")||touches.length>0){
    monster.x = monster.x-10
  }

  if(keyDown("d")||touches.length>0){
  monster.x = monster.x+10
  }

//libere as balas e mude a imagem do personagem para a posição de tiro quando a tecla espaço for pressionada
  if(keyWentDown("space")){
  
    player.addImage(shooter_shooting)
  
  }

//player goes back to original standing image once we stop pressing the space bar
  else if(keyDown("space")){
  player.addImage(runnerImg)

  }

drawSprites();

}
