let game=undefined;
let timer=undefined;

const startGame=function(){
  let startButton=document.getElementById('startButton');
  let restartButton=document.getElementById('restartButton');
  let hintButton=document.getElementById('hint');

  changeVisibility(restartButton,'hidden');
  startButton.onclick=(event)=>{getStartButtonAction(startButton,restartButton)};
  hintButton.onclick=(event)=>{showInstructions()};
  restartButton.onclick=(event)=>{location.reload()};
};

const getStartButtonAction=function(startButton,restartButton){
  game=new Game(30);
  timer = setInterval(function(){ startTimer() },1000);

  changeVisibility(startButton,'hidden');
  changeVisibility(restartButton,'visible');
  changeColor();

  let grid=document.getElementById('grid');
  grid.onclick=(event)=>{performClickAction(event.target.id)};
};

const changeColor=function(){
  let colorName=getRandomColorName();
  let fontColor=getRandomFontColor();

  game.updateColors(fontColor,colorName);
  showColorName(game.getFontColor(),game.getColorName());
};

const performClickAction=function(cellId){
  if(isClickOnRightCell(cellId)){
    getCorrectClickAction();
  }
  else getGameOverAction();
};

const startTimer=function(){
  let countDown=game.getRemainingTime();
  if(countDown>=0){
    showRemainingTime(countDown);
    game.decrementTimer();
  }
  else getGameOverAction();
};

const isClickOnRightCell=function(cellId){
  return game.getColorName() == getCellColor(cellId);
};

const getCorrectClickAction=function(){
  game.incrementScore();
  showUpdatedScore(game.getScore());
  changeColor();
};

const getGameOverAction=function(){
  showGameOverMessage();
  clearInterval(timer);
};

window.onload=startGame;
