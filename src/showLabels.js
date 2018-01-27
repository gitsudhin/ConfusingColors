const showColorName=function(fontColor,colorName){

  let displayColor=document.getElementById('colorName');
  displayColor.style.animation='fadeIn 3s';
  displayColor.innerText=colorName;
  displayColor.style.color=fontColor;
};

const showUpdatedScore=function(score){
  document.getElementById('scoreValue').innerText = score;
};

const showRemainingTime=function(countDown){
  document.getElementById("timerBlock").innerText = countDown;
};

const showInstructions=function(){
  let instructionHeading=document.getElementById('hintHeading');
  let instructions=document.getElementById('hintContent');
  let instructionText="Click on the color blocks which mentioned on the top.";
  instructionText+=" 30 seconds is the time interval!<br>~~~Good Luck~~~";

  instructionHeading.innerText="Instructions";
  instructions.innerHTML=instructionText;
  changeVisibility(instructionHeading,'visible');
  changeVisibility(instructions,'visible');

  setTimeout(function(){
    changeVisibility(instructionHeading,'hidden');
    changeVisibility(instructions,'hidden');
  },5000);
};

const showGameOverMessage=function(){

  let displayColor=document.getElementById('colorName');
  let startButton=document.getElementById('startButton');
  let grid = document.getElementById('grid');

  displayColor.innerText='Game Over';
  displayColor.style.color='grey';
  displayColor.style.animation='fadeIn 3s';
  startButton.style.visibility='hidden';

  grid.onclick=(event)=>{displayColor.innerText='Game Over'};
};

const changeVisibility=function(item,itemVisibility){
  item.style.visibility=itemVisibility;
};
