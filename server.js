const http =require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);
    res.setHeader('Content-Type','text/html');

    let path='./main/';
    switch(req.url){
        case '/':
            path+='index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path+='about.html';
            res.statusCode = 200;
            break;
        default:
            path+='404.html';
            res.statusCode = 404;
            break;
    }
    // res.write('<p>Hi all</p>');
    // res.end();
    //send html file
    fs.readFile(path,(err,data)=>{
        if(err){console.log(err);
            res.end();
        }
        else {
           // res.write(data); // for multiple things we do this other we can give data directly in end
            res.end(data);
        }
    });
});


server.listen(3000,"localhost",()=>{
    console.log("request madeto port 3000");
});