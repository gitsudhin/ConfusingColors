const fs = require('fs');
const express = require('express');
const app = express();

const logRequest=function(req,res,next){
  let date=new Date();
  date=date.toLocaleString();
  console.log(`${date} ${req.method} ${req.url}`);
  next();
}

const getHomePage=function(req,res,next){
  res.redirect('/homePage.html');
  next();
}

const getJsFiles=function(req,res,next){
  let validFiles=['/game.js','/mainController.js','/showLabels.js','/utils.js'];

  if(validFiles.includes(req.url)){
    let fileContents=fs.readFileSync(`./src${req.url}`,'utf8');
    res.send(fileContents);
  }
  next();
}

app.use(logRequest);
app.get('/',getHomePage);
app.use(getJsFiles);
app.use(express.static('public'));


module.exports=app;
