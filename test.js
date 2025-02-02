// const name="Narmatha";
// console.log(name);

// console.log(global);

setTimeout(()=>{
    console.log("Hii...! All");
    clearInterval(init);
},3000);

const init=setInterval(()=>{
console.log("Interval...");
},1000);

console.log(__dirname);
console.log(__filename);
