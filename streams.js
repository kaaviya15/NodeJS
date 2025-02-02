const fs=require('fs');

const readStream=fs.createReadStream('./docs/large.txt',{encoding:'utf8'});
const writeStream=fs.createWriteStream('./docs/large2.txt');



// readStream.on('data',(chunk)=>{
//     console.log("---------NEW DATA--------");
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

//piping
readStream.pipe(writeStream);