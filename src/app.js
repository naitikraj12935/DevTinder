const express=require('express');

const app=express();
app.post('/',(req,res)=>{
    res.send('hello welcome to testing')
})
app.use('/',(req,res)=>{
    res.send('hello welcome to dev tinder')
}) 



app.use((req,res)=>{
    res.send('hello welcome to dev tinder')
})

app.listen(7777,()=>{
    console.log('server is running on port thala for a reason')
})