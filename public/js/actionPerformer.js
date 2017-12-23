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
    showColorAndVerifyClick();
  }
};

const showColorAndVerifyClick=function(){
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
  grid.onclick=function(event){
    if(realFontColor==getCellColor(event.target.id))
      correctClickAction(scoreBlock);
    else
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
  }else
    gameOverAction()
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

const getColor=function(index){
  let color={
    '1':'RED',
    '2':'GREEN',
    '3':'BLUE',
    '4':'YELLOW',
  };
  return color[index];
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
  let colorIndex=Math.ceil(Math.random()*4);
  let color=getColor(colorIndex);
  return color;
};

const getRandomFontColor=function(){
  let colorIndex=Math.ceil(Math.random()*4);
  let color=getFontColor(colorIndex);
  return color;
};

const gameOverAction=function(){
  let displayColor=document.getElementById('colorName');
  let restartButton=document.getElementById('restartButton');
  let startButton=document.getElementById('startButton');
  clearInterval(timer);
  displayColor.innerText='Game Over';
  displayColor.style.color='grey';
  restartButton.style.visibility='visible';
  startButton.style.visibility='hidden';
  // let playerName=prompt('Enter Your name');
  // updateLeaderboards(playerName);
  restartButton.onclick=(event)=>{location.reload()};
};
//
// const updateLeaderboards=function(playerName){
//   let dbContent=JSON.parse(getFileContent('../data/leaderBoard.txt'));
//   if(dbContent[0].score<score){
//     dbContent=[{'score':score,'name':playerName}];
//     fs.writeFileSync('../data/leaderBoard.txt',);
//     let displayColor=document.getElementById('colorName');
//     let message=`You beaten ${dbcontent.name}'s highscore ${dbcontent.score}`;
//     dispalyColor.innerText=message;
//   }
// };


window.onload=startGame;
