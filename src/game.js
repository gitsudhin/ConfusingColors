const Game=function(countDownTime){
  this.countDown=countDownTime;
  this.colorName='';
  this.fontColor='';
  this.timer=undefined;
  this.score=0;
};
Game.prototype={

  getColorName:function(){
    return this.colorName;
  },
  getFontColor:function(){
    return this.fontColor;
  },
  updateColors:function(fontColor,colorName){
    this.colorName=colorName;
    this.fontColor=fontColor;
  },
  getRemainingTime:function(){
    return this.countDown;
  },
  getScore:function(){
    return this.score;
  },
  incrementScore:function(){
    this.score++;
  },
  decrementTimer:function(){
    this.countDown--;
  },
  isGameOver:function(){
    return true;
  }
}
