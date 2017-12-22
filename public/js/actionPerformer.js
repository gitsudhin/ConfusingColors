let score=0;
let timer;
let countDown=30;

const startGame=function(){
  let startButton=document.getElementById('startButton');
  let restartButton=document.getElementById('restartButton');
  restartButton.style.visibility='hidden';
  startButton.onclick=function(event){
    score=0;
    startButton.style.display="none";
    timer = setInterval(function(){ startTimer() },1000);
    showColorAndVerifyClick(startButton);
  }
};

const showColorAndVerifyClick=function(startButton){
  let grid=document.getElementById('grid');
  let displayColor=document.getElementById('colorName');
  let scoreBlock=document.getElementById('scoreValue');
  let realFontColor=getRandomColorName();
  let showingFontColor=getRandomFontColor();
  displayColor.innerText=realFontColor;
  displayColor.style.color=showingFontColor;
  clickOnColorAction(realFontColor,scoreBlock);
};

const clickOnColorAction=function(realFontColor,scoreBlock){
  grid.onclick=function(event) {
    console.log(event.target.id);
    if(realFontColor==getCellColor(event.target.id)){
      correctClickAction(scoreBlock);
    }else {
      gameOverAction();
    }
  }
};

const isInvalidClick=function(cellID){
  let validIDs=['cell1','cell2','cell3','cell4'];
  return !validIDs.includes(cellID);
};

const gameOverAction=function(){
  let displayColor=document.getElementById('colorName');
  displayColor.innerText='Game Over';
  displayColor.style.color='grey';
  clearInterval(timer);
  let restartButton=document.getElementById('restartButton');
  let startButton=document.getElementById('startButton');
  restartButton.style.visibility='visible';
  startButton.style.visibility='hidden';
  restartButton.onclick=(event)=>{location.reload();};
};

const correctClickAction=function(scoreBlock){
  score++;
  scoreBlock.innerText=score;
  showColorAndVerifyClick();
};

const startTimer=function(){
  if(countDown>=0){
    document.getElementById("timerBlock").innerHTML = countDown;
    countDown-=1;
  }else {
    gameOverAction()
  }
};

const getFontColor=function(index){
  let color={
    '1':'RED',
    '2':'GREEN',
    '3':'BLUE',
    '4':'YELLOW',
  };
  return color[index];
};

const getCellColor=function(cellID){
  let color={
    'cell1':'RED',
    'cell2':'GREEN',
    'cell3':'BLUE',
    'cell4':'YELLOW',
  };
  return color[cellID];
};

const getRandomColorName=function(){
  let colorIndex=Math.ceil(Math.random()*4);
  let color=getFontColor(colorIndex);
  return color;
};
const getRandomFontColor=function(){
  let colorIndex=Math.ceil(Math.random()*4);
  let color=getFontColor(colorIndex);
  return color=='YELLOW' ? 'rgb(246, 198, 30)' : color;
};


window.onload=startGame;
