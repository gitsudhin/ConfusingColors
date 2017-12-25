let score=0;
let countDown=30;
let fontColorName='';
let showingFontColor='';
let timer;

const startGame=function(){
  let startButton=document.getElementById('startButton');
  let restartButton=document.getElementById('restartButton');
  let hintButton=document.getElementById('hint');
  restartButton.style.visibility='hidden';
  startButton.onclick=(event)=>{startButtonAction(startButton,restartButton)};
  hintButton.onclick=(event)=>{hintButtonAction(hintButton)};
  restartButton.onclick=(event)=>{location.reload()};
};

const startButtonAction=function(startButton,restartButton){
  score=0;
  startButton.style.visibility='hidden';
  restartButton.style.visibility='visible';
  timer = setInterval(function(){ startTimer() },1000);
  showColorAndVerifyClick();
};

const hintButtonAction=function(hintButton){
  let hintHeading=document.getElementById('hintHeading');
  let hintContent=document.getElementById('hintContent');
  hintHeading.innerText="Instructions";
  hintContent.innerHTML="Click on the color blocks which mentioned on the top. 30 seconds is the time interval!<br>~~~Good Luck~~~";
  hintHeading.style.visibility="visible";
  hintContent.style.visibility="visible";
  setTimeout(function(){
    hintHeading.style.visibility="hidden";
    hintContent.style.visibility="hidden";
  },6000);
};

const showColorAndVerifyClick=function(){
  let grid=document.getElementById('grid');
  let displayColor=document.getElementById('colorName');
  let scoreBlock=document.getElementById('scoreValue');
  fontColorName=getRandomColorName();
  showingFontColor=getRandomFontColor();
  displayColor.innerText=fontColorName;
  displayColor.style.color=showingFontColor;
  displayColor.style.animation='fadeIn 3s';
  clickOnColorAction(grid,scoreBlock);
};

const clickOnColorAction=function(grid,scoreBlock){
  grid.onclick=(event)=>{
    performClickAction(event.target.id,scoreBlock);
  };
};

const performClickAction=function(id,scoreBlock){
  if(fontColorName==getCellColor(id)){
    correctClickAction(scoreBlock);
  }
  else{
    gameOverAction();
  }
};

const correctClickAction=function(scoreBlock){
  score++;
  scoreBlock.innerText=score;
  showColorAndVerifyClick();
};

const startTimer=function(){
  if(countDown>=0){
    document.getElementById("timerBlock").innerHTML = countDown;
    countDown--;
  }else{
    gameOverAction();
  }
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

const getFontColor=function(index){
  let color={
    '1':'RED',
    '2':'rgb(36, 171, 49)',
    '3':'rgb(51, 83, 222)',
    '4':'rgb(246, 198, 30)',
  };
  return color[index];
};

const getRandomColorName=function(){
  let colorIndex=`cell${Math.ceil(Math.random()*4)}`;
  let color=getCellColor(colorIndex);
  return color;
};

const getRandomFontColor=function(){
  let colorIndex=Math.ceil(Math.random()*4);
  let color=getFontColor(colorIndex);
  return color;
};

const gameOverAction=function(){
  let grid=document.getElementById('grid');
  let displayColor=document.getElementById('colorName');
  let startButton=document.getElementById('startButton');
  let scoreBlock=document.getElementById('scoreValue');
  displayColor.innerText='Game Over';
  displayColor.style.color='grey';
  displayColor.style.animation='fadeIn 3s';
  startButton.style.visibility='hidden';
  clearInterval(timer);
  grid.onclick=(event)=>{displayColor.innerText='Game Over'};
};

window.onload=startGame;
