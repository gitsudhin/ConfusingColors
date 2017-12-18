
let count=0;
const colorChecker=function(){
  let grid=document.getElementById('grid');
  // document.getElementById('grid').addEventListener('click',clickChecker);
  grid.onclick=function(event) {
    let displayColor=document.getElementById('colorName');
    // setTimeout(function(){displayColor.style.display='none'},3000);

    let color=getColor(event.target.id);
    displayColor.innerText=color[0];
    setTimeout(function(){displayColor.innerText='Game Over'},3000);
  }
};

const clickChecker=function(){
  count++;
  let displayColor=document.getElementById('colorName');
  // setTimeout(function(){displayColor.style.display='none'},3000);

  let color=getColor(event.target.id);
  displayColor.innerText=color[0];
  setTimeout(function(){displayColor.innerText='Game Over'},3000);
  if(count==5){
    document.removeEventListener('click',clickChecker);
  }
}

const startGame=function(){
  let startButton=document.getElementById('startButton');
  startButton.onclick=function(event){
    colorChecker();
  }
};
window.onload=startGame;
