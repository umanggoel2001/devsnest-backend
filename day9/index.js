const express= require('express');
const path= require('path');

const app=express();

// console.log(hello);
app.use('/',(req,res)=>{
    //sending the file
   
    // res.sendFile(path.join(__dirname,"public/hello.txt"),"test.txt");
//for downloading
res.download(path.join(__dirname,"public/hello.txt"),"test.txt");

});
app.listen(5000);