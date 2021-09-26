const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("hello");
})

app.get('/user/:id',(req,res) => {
    res.send(req.params.id)
})

app.get('/feed?limit=20', (req, res) => {
    res.send(req.query.limit)
})
//defining the port
app.listen(5000);