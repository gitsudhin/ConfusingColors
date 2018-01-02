"use strict";
const http = require('http');
const fs = require('fs');
const port=9009;

const getContentType=function(requestFile){
  let contentType={
    '.html':'text/html',
    '.js':'text/js',
    '.css':'text/css',
    '.jpeg':'image/jpeg',
    '.jpg':'image/jpg',
    '.gif':'image/gif',
    '.png':'image/png',
    '.pdf':'application/pdf',
  };
  return contentType[requestFile];
};

const setContentType=function(fileUrl,res){
  let requestFileExtension=fileUrl.slice(fileUrl.lastIndexOf('.'));
  let contentType=getContentType(requestFileExtension);
  res.writeHead(200,{'content-type':contentType});
};

const isInvalidFile=function(fileUrl){
  return fileUrl=='favicon.ico' || !isFileExist(fileUrl);
};

const isFileExist=function(fileUrl){
  return fs.existsSync(fileUrl);
};

const getFileContent=function(file,encoding='utf8'){
  return  fs.readFileSync(file,encoding);
};

const actionForFileExists=function(fileUrl,res){
  setContentType(fileUrl,res);
  let content=getFileContent(fileUrl,null);
  res.write(content);
  res.end();
};

const showRequestLog=function(req,fileUrl){
  let date=new Date();
  date=date.toLocaleString();
  console.log(`${date} ${req.method} ${fileUrl}`);
};

const requestHandler=function(req,res){

  let fileUrl='..'+req.url;
  showRequestLog(req,fileUrl);

  if(req.url=='/'){
    fileUrl='../index.html';
  }
  if(isFileExist(fileUrl)){
    actionForFileExists(fileUrl,res);
    return;
  }
  if(isInvalidFile(fileUrl)){
    res.statusCode=404;
    res.write('Page not Found');
    res.end();
  }
  res.end();
};

let server=http.createServer(requestHandler);
server.listen(port);
console.log(`Port ${port} is Listening`);
