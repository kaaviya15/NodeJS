const fs=require('fs');


//reading files
fs.readFile('./docs/blog1.txt',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
});

console.log("Last line of the file");


//writing files
fs.writeFile('./docs/blog1.txt',"Hello World",()=>console.log("file written succesfully")); //If the given file exist 
fs.writeFile('./docs/blog2.txt',"Hello Kaaviya",()=>console.log("New file created")); //if the file not exist in the given path it creates a new file named in the given path



//Directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    });
}else{
    fs.rmdir('./assets',(err,data)=>{
        if(err){console.log(err);}
        else{console.log("folder deleted")}
    });
}

//deleting files
if(fs.existsSync('./docs/deleteItem.txt')){
    fs.unlink('./docs/deleteItem.txt',(err,data)=>{
        if(err)console.log(err);
        else console.log("file deleted");
    });
}