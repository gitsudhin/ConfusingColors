const getCellColor=function(cellID){
  let color={
    'cell1':'RED',
    'cell2':'GREEN',
    'cell3':'BLUE',
    'cell4':'YELLOW',
    'cell5':'CYAN',
    'cell6':'GREY',
    'cell7':'PINK'
  };
  return color[cellID];
};

const getFontColor=function(index){
  let color={
    '1':'RED',
    '2':'rgb(36, 171, 49)',
    '3':'rgb(51, 83, 222)',
    '4':'rgb(246, 198, 30)',
    '5':'rgb(37, 201, 230)',
    '6':'rgb(155, 150, 156)',
    '7':'rgb(244, 134, 203)',
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
