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
    '.pdf':'application/pdf',
  }
  return contentType[requestFile];
};

const isInvalidFile=function(file){
  return file=='favicon.ico';
};

const isFileExist=function(file){
  return fs.existsSync(file);
};

const requestHandler=function(req,res){

  let file=req.url.slice(1);

  if(isFileExist(file)){

    let requestFileExtension=file.slice(file.lastIndexOf('.'));
    let contentType=getContentType(requestFileExtension);
    res.writeHead(200,{'content-type':contentType});

    let content=fs.readFileSync(file);
    res.write(content);
  }

  if(isInvalidFile(file)){
    res.statusCode=404;
  }
  res.end();
};

let server=http.createServer(requestHandler);
server.listen(port);
console.log(`Port ${port} is Listening`);
